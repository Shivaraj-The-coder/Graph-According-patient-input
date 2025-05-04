# Sleep Apnea Risk Visualizer

This simple web tool helps visualize and explain the severity of sleep apnea based on a user's screening score. The content, colors, and chart visuals update dynamically based on the user's score, age, and gender passed through the URL.

## What It Does

- Takes input from the URL like `score`, `age`, and `gender`
- Automatically categorizes the score into:
  - **0 - 4** → Normal
  - **5 - 14** → Mild
  - **15 - 30** → Moderate
  - **30+** → Severe
- Displays a matching graph bar and highlights the user’s exact score
- Provides a short insight and an explanation text customized for the user's gender and result level

## Example Use
You’ll see:
- A graph highlighting score **7**
- A label showing it's **Mild**
- A short message: *Snoring is a common symptom of xyz*
- A description based on the fact that it’s a male user with mild severity

## Built With
- **HTML** – for page structure  
- **CSS** – for styling and dynamic coloring  
- **JavaScript** – for parsing data from the URL and updating content in real time
