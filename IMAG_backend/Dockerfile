FROM python:3.8-alpine
COPY ./requirements.txt /workspace/requirements.txt
COPY ./IMAG /workspace/IMAG
WORKDIR /workspace/
RUN pip install -r requirements.txt
WORKDIR /workspace/IMAG/imag
EXPOSE 5000
CMD [ "python", "main.py" ]