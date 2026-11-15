# relative-grade-calculator-FAST-NUCES

A relative grade calculator made for students at FAST-NUCES. The grading scheme follows the official Modified Class Average (MCA) look-up table. Simply enter the MCA and your obtained marks to view the corresponding grade.

## Features

- Evaluates letter grades and GPA points using the official FAST-NUCES MCA look-up table (MCA range 30 to 91).
- Automatically rounds decimal MCA values and obtained marks to the nearest integer.
- Displays the baseline grade for the given MCA alongside your personal result.
- Displays the full grade cutoff thresholds for the active MCA row.

## Usage

1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/relative-grade-calculator-FAST-NUCES.git
   ```
2. Open `index.html` in any web browser.
3. Enter your course name (optional), the Modified Class Average (MCA), and your obtained marks.
4. Click **Evaluate Grade** to view your grade and cutoff breakdown.

## Project Structure

- `index.html` — Markup and form interface.
- `style.css` — Styling and responsive layout.
- `script.js` — MCA look-up table data and grade evaluation logic.