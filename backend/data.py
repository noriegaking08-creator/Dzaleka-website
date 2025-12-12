from configure import SITE_INFO

# Few example achievements, supporters and gallery entries. The frontend will fetch these.
ACHIEVEMENTS = [
    {
        "id": 1,
        "title": "2021 National Schools Science Fair Winners",
        "summary": "Dzaleka CDSS students won recognition at the Malawi National Schools Science Fair for student-developed projects.",
        "details": "Students showcased innovations such as traffic accident prevention software and low-cost experimental prototypes.",
        "year": 2021
    },
    {
        "id": 2,
        "title": "New Classrooms (Reported 2023)",
        "summary": "UNHCR and EU-funded classroom handover to Dzaleka Secondary School to reduce overcrowding.",
        "details": "Four new fully equipped classrooms were handed over to the school to expand capacity. Please verify with UNHCR/JRS for press materials.",
        "year": 2023
    }
]

SUPPORTERS = [
    {"name": "UNHCR Malawi", "role": "Camp & education support"},
    {"name": "European Union (EU)", "role": "Funding for classrooms (reported)"},
    {"name": "Jesuit Refugee Service (JRS)", "role": "Education partner and coordination"},
    {"name": "Malawian Government (Ministry of Education)", "role": "Now under government administration"}
]

GALLERY = [
    # these are image filenames; place them under backend/static/images/
    {"id": 1, "file": "image1.jpg", "caption": "Students and donation boxes at Dzaleka CDSS"},
    {"id": 2, "file": "image2.jpg", "caption": "Computer lab students learning digital skills"},
    {"id": 3, "file": "image3.jpg", "caption": "Large group photo of Dzaleka CDSS students"},
    {"id": 4, "file": "image4.jpg", "caption": "Students exploring 3D-printing / STEM tools"}
]

ABOUT = {
    "overview": SITE_INFO["name"] + " provides secondary education to refugees and host community students in Dzaleka Refugee Camp, Dowa.",
    "hours": "Monday–Friday, 07:00–14:00 (reported)",
    "population_served": "Children from Burundi, DRC, Ethiopia, Rwanda and Malawian host communities"
}