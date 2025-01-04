import os

import dotenv
import pymongo
from datetime import datetime
from openai import OpenAI

dotenv.load_dotenv()

mongo_url = os.getenv("MONGO_URL")
client = pymongo.MongoClient(mongo_url)
database = client["ChatBLT"]
collection = database["Recipes"]

open_ai_key = os.getenv("OPEN_AI")
client = OpenAI(
    organization="org-b0YDxNGUHyH96PMkIOnJxkmI",
    api_key=open_ai_key,
)
MODEL = "gpt-4o"

for _ in range(5):
    prompt = f"""What sandwich should I make? Pick a completely random one, and format the resulting text with some HTML tags. Only use HTML tags for formatting, do not create a full HTML document. Only output this HTML. Do not mention the sandwich is random. Title it with a h2 tag with the name of the sandwich."""
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "user", "content": prompt},
        ],
    )
    recipe = response.choices[0].message.content
    print(recipe)

    collection.insert_one({'recipe': recipe, 'created_at': datetime.now()})
