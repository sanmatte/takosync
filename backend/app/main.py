from fastapi import FastAPI
from app.core.config import settings

app = FastAPI(title=settings.TITLE)
# , openapi_url=settings.API_PREFIX + "/openapi.json", root_path=settings.API_PREFIX)


@app.get("/", tags=["Root"])
def read_root():
    return {"message": f"Welcome to {settings.TITLE} API!"}
