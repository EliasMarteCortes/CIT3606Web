import streamlit as st

baseTuition = 42540
fees = 2025

gpa = st.number_input("Enter your high school or transfer GPA")

sai = st.number_input("Enter your FAFSA SAI")

local = st.radio("Are you local to the area?", ("Yes", "No"))

finaid = 0

if (gpa >= 3.5):
    finaid += 20000

if (sai <= 7395):
    finaid += 7395 - sai

if (local == "Yes"):
    finaid += 5000


calcButton = st.button("Calculate")

if (calcButton):
    net = (baseTuition + fees) - finaid
    st.success(f"net: {net}")