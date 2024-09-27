import subprocess

# Define the command as a list of strings
command = ["cards", "make", "data/pokemon.csv", "-d", "defs.csv", "-o", "Pokemon", "--card-size=standard_mini"]

# Execute the command
try:
    result = subprocess.run(command, check=True, text=True)
    print("Command executed successfully!")
except subprocess.CalledProcessError as e:
    print(f"An error occurred: {e}")
