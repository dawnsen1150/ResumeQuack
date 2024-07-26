FROM --platform=linux/amd64 python:3.12-bookworm
WORKDIR /app
#COPY ./.env /app/
COPY . .
RUN pip3 install -r ./requirements.txt
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]