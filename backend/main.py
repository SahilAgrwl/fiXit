from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# Mock database for search data
search_data = {
    "india": "India, a vibrant South Asian nation, boasts a rich tapestry of culture, history, and diversity. With a population exceeding 1.3 billion, it is the world's largest democracy. India's landscape is as varied as its people, encompassing the majestic Himalayas, fertile plains, and coastal regions. The country is renowned for its ancient civilizations, exemplified by the iconic Indus Valley and Vedic cultures. India's cultural kaleidoscope includes classical dance forms, intricate art, and a myriad of languages. The cuisine, with its aromatic spices, reflects regional flavors. Modern India is a dynamic blend of tradition and progress, as seen in its thriving technology sector and global influence.",
    "ai": "Artificial Intelligence (AI) revolutionizes the technological landscape, representing a frontier where machines emulate human intelligence. Using algorithms, AI systems analyze data, learn patterns, and make decisions, enabling tasks such as speech recognition, image processing, and autonomous driving. Machine learning, a subset of AI, empowers systems to adapt and improve from experience without explicit programming. As AI evolves, ethical considerations surrounding privacy, bias, and accountability become paramount. With applications spanning healthcare, finance, and entertainment, AI shapes the future, promising innovation while raising questions about its societal impact. Striking a balance between advancement and ethical responsibility remains a pivotal challenge in the AI era.",
    "how to grow startups": "Foster startup growth by cultivating a dynamic ecosystem. Encourage collaboration through co-working spaces and incubators, facilitating knowledge exchange. Leverage mentorship programs connecting seasoned entrepreneurs with startups. Streamline regulatory processes to ease market entry, fostering innovation. Invest in education and skill development, creating a robust talent pool. Develop strategic partnerships to expand networks and resources. Embrace digital platforms for visibility and scalability. Provide accessible funding avenues, such as venture capital and angel investors. Promote a culture of resilience, learning from failures. Support diversity, recognizing the strength in varied perspectives. Government initiatives and policies should align with entrepreneurial needs, fostering an environment where startups can thrive, innovate, and contribute to economic growth. ",
}

@app.get("/search")
def search(query: str):
    result = search_data.get(query.lower())
    if result is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"results": [result]}
