// Test utilities for verifying API functionality
import { fetchJSON, postContact, ApiResponse } from './api';

export interface TestData {
  about: any;
  achievements: any[];
  supporters: any[];
  gallery: any[];
}

export async function testAllEndpoints(): Promise<TestData> {
  try {
    // Test all endpoints in parallel
    const [aboutRes, achievementsRes, supportersRes, galleryRes] = await Promise.all([
      fetchJSON('/api/about'),
      fetchJSON('/api/achievements'),
      fetchJSON('/api/supporters'),
      fetchJSON('/api/gallery')
    ]);

    // Validate responses
    if (aboutRes.status !== 'ok') throw new Error('About endpoint failed');
    if (achievementsRes.status !== 'ok') throw new Error('Achievements endpoint failed');
    if (supportersRes.status !== 'ok') throw new Error('Supporters endpoint failed');
    if (galleryRes.status !== 'ok') throw new Error('Gallery endpoint failed');

    return {
      about: aboutRes.data,
      achievements: achievementsRes.data,
      supporters: supportersRes.data,
      gallery: galleryRes.data
    };
  } catch (error) {
    console.error('Error testing endpoints:', error);
    throw error;
  }
}

// Test contact form submission
export async function testContactSubmission(): Promise<ApiResponse<any>> {
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message for verifying contact form functionality.'
    };
    
    const result = await postContact(testData);
    return result;
  } catch (error) {
    console.error('Error testing contact submission:', error);
    throw error;
  }
}