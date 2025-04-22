#! /bin/sh

# run python venv
# python3 -m venv venv
source venv/bin/activate
# pip install -r requirements.txt
# run fastapi
uvicorn app.main:app --reload
echo "server exited"
# deactivate venv
deactivate
