from fastapi import FastAPI
from app.core.config import settings
from app.api.routes import users, auth

app = FastAPI(title=settings.TITLE)
# , openapi_url=settings.API_PREFIX + "/openapi.json", root_path=settings.API_PREFIX)
app.include_router(users.router, prefix=settings.API_PREFIX + "/users", tags=["Users"])
app.include_router(auth.router, prefix=settings.API_PREFIX + "/auth", tags=["Auth"])


@app.get("/", tags=["Root"])
def read_root():
    return {"message": f"Welcome to {settings.TITLE} API!"}
