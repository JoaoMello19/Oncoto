import pandas as pd

csv_path = "filtered_countries.csv"
json_path = "filtered_countries.json"

df = pd.read_csv(csv_path)
df.to_json(json_path, orient="records", force_ascii=False, indent=2)
print(f"Arquivo JSON salvo em: {json_path}")
