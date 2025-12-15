import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
STATIC_IMAGES_DIR = os.path.join(BASE_DIR, "static", "images")
CONTACTS_FILE = os.path.join(BASE_DIR, "contacts.json")

# Basic site info (can be extended)
SITE_INFO = {
    "name": "Dzaleka Community Day Secondary School (Dzaleka CDSS)",
    "location": "Dzaleka Refugee Camp, Dowa District, Malawi (M16 road)",
    "email": "ndizeyenoriega@gmail.com",
    "phone": "+265 995 208 178"
}