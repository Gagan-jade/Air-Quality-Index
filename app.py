# # app.py

# from flask import Flask, request, jsonify
# import pandas as pd
# import tensorflow as tf
# from sklearn.preprocessing import MinMaxScaler
# import pickle
# import os

# # Set save directory
# save_dir = "E:/AIQ Dataset/"

# # Load the trained model
# model = tf.keras.models.load_model(os.path.join(save_dir, "trained_lstm_model.keras"))

# # Load the scalers
# with open(os.path.join(save_dir, "scaler_X.pkl"), "rb") as f:
#     scaler_X = pickle.load(f)

# with open(os.path.join(save_dir, "scaler_y.pkl"), "rb") as f:
#     scaler_y = pickle.load(f)

# # Initialize Flask
# app = Flask(__name__)

# # Define the prediction route
# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json()
#     year = data.get('year')
#     factories = data.get('factories')

#     # Prepare input for prediction
#     sample_input = pd.DataFrame({
#         "Year": [year],
#         "factories": [factories]
#     })

#     features = ["Year", "factories"]
#     sample_input = sample_input[features]

#     # Scale the sample input
#     scaled_input = scaler_X.transform(sample_input)

#     # Reshape for LSTM input
#     scaled_input_reshaped = scaled_input.reshape(1, 1, len(features))

#     # Make predictions
#     predicted_scaled = model.predict(scaled_input_reshaped)

#     # Inverse transform the predictions to get actual pollutant values
#     predicted_actual = scaler_y.inverse_transform(predicted_scaled)

#     # Define pollutant labels
#     pollutants = ["CO", "NO2", "SO2", "O3", "PM2.5", "PM10"]
    
#     # Prepare the predictions DataFrame
#     predictions_df = pd.DataFrame(predicted_actual, columns=pollutants)
#     predictions_df["Year"] = year
#     predictions_df["Factories"] = factories

#     # Return predictions as JSON
#     return jsonify(predictions_df.to_dict(orient='records'))

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
import pandas as pd
import tensorflow as tf
from sklearn.preprocessing import MinMaxScaler
import pickle
import os
from flask_cors import CORS  # Import CORS

# Set save directory
save_dir = "E:/AIQ Dataset/"

# Load the trained model
model = tf.keras.models.load_model(os.path.join(save_dir, "trained_lstm_model.keras"))

# Load the scalers
with open(os.path.join(save_dir, "scaler_X.pkl"), "rb") as f:
    scaler_X = pickle.load(f)

with open(os.path.join(save_dir, "scaler_y.pkl"), "rb") as f:
    scaler_y = pickle.load(f)

# Initialize Flask
app = Flask(__name__)

# Enable CORS for all routes, allowing requests from React (localhost:3000)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

# Define the prediction route
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    year = data.get('year')
    factories = data.get('factories')

    # Prepare input for prediction
    sample_input = pd.DataFrame({
        "Year": [year],
        "factories": [factories]
    })

    features = ["Year", "factories"]
    sample_input = sample_input[features]

    # Scale the sample input
    scaled_input = scaler_X.transform(sample_input)

    # Reshape for LSTM input
    scaled_input_reshaped = scaled_input.reshape(1, 1, len(features))

    # Make predictions
    predicted_scaled = model.predict(scaled_input_reshaped)

    # Inverse transform the predictions to get actual pollutant values
    predicted_actual = scaler_y.inverse_transform(predicted_scaled)

    # Define pollutant labels
    pollutants = ["CO", "NO2", "SO2", "O3", "PM2.5", "PM10"]
    
    # Prepare the predictions DataFrame
    predictions_df = pd.DataFrame(predicted_actual, columns=pollutants)
    predictions_df["Year"] = year
    predictions_df["Factories"] = factories

    # Return predictions as JSON
    return jsonify(predictions_df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
