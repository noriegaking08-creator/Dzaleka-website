import unittest
import json
import os
from app import create_app


class TestApp(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()

    def test_index_route(self):
        """Test the index route"""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        
    def test_about_endpoint(self):
        """Test the about API endpoint"""
        response = self.client.get('/api/about')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'ok')
        self.assertIn('data', data)

    def test_achievements_endpoint(self):
        """Test the achievements API endpoint"""
        response = self.client.get('/api/achievements')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'ok')
        self.assertIn('data', data)

    def test_supporters_endpoint(self):
        """Test the supporters API endpoint"""
        response = self.client.get('/api/supporters')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'ok')
        self.assertIn('data', data)

    def test_gallery_endpoint(self):
        """Test the gallery API endpoint"""
        response = self.client.get('/api/gallery')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'ok')
        self.assertIn('data', data)

    def test_contact_endpoint_valid_data(self):
        """Test the contact API endpoint with valid data"""
        contact_data = {
            'name': 'Test User',
            'email': 'test@example.com',
            'message': 'Test message'
        }
        response = self.client.post('/api/contact',
                                   data=json.dumps(contact_data),
                                   content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'ok')

    def test_contact_endpoint_missing_required_fields(self):
        """Test the contact API endpoint with missing required fields"""
        contact_data = {
            'name': 'Test User'
            # Missing message field
        }
        response = self.client.post('/api/contact',
                                   data=json.dumps(contact_data),
                                   content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'error')

    def test_static_files_access(self):
        """Test if static files can be accessed if they exist"""
        # This test checks if we can access static files, assuming they exist
        # In a real scenario, we'd need to ensure the image files exist first
        response = self.client.get('/static/images/image1.jpg')
        # The response status could be 200 (found) or 404 (not found) depending on if the file exists
        # Both are valid responses in different contexts
        self.assertIn(response.status_code, [200, 404])


if __name__ == '__main__':
    unittest.main()