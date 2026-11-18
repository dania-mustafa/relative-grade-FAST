// ==========================================================================
// MCA Table-Based Relative Grading Lookup Data (MCA 30 to 91)
// ==========================================================================
const MCA_TABLE = {
    30: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: null, "C+": 30, "B-": 33, B: 38, "B+": 43, "A-": 48, A: 65, "A+": 70 },
    31: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: null, "C+": 30, "B-": 34, B: 39, "B+": 44, "A-": 49, A: 65, "A+": 70 },
    32: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: null, "C+": 30, "B-": 35, B: 40, "B+": 45, "A-": 50, A: 65, "A+": 70 },
    33: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: 30, "C+": 31, "B-": 36, B: 41, "B+": 46, "A-": 51, A: 65, "A+": 70 },
    34: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: 30, "C+": 32, "B-": 37, B: 42, "B+": 47, "A-": 52, A: 65, "A+": 70 },
    35: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: 30, "C+": 33, "B-": 38, B: 43, "B+": 48, "A-": 53, A: 65, "A+": 70 },
    36: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: 30, "C+": 34, "B-": 39, B: 44, "B+": 49, "A-": 54, A: 65, "A+": 70 },
    37: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": null, C: 30, "C+": 35, "B-": 40, B: 45, "B+": 50, "A-": 55, A: 65, "A+": 70 },
    38: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": 30, C: 31, "C+": 36, "B-": 41, B: 46, "B+": 51, "A-": 56, A: 65, "A+": 70 },
    39: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": 30, C: 32, "C+": 37, "B-": 42, B: 47, "B+": 52, "A-": 57, A: 65, "A+": 70 },
    40: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": 30, C: 33, "C+": 38, "B-": 43, B: 48, "B+": 53, "A-": 58, A: 65, "A+": 70 },
    41: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": 30, C: 34, "C+": 39, "B-": 44, B: 49, "B+": 54, "A-": 59, A: 65, "A+": 70 },
    42: { mcaGrade: "C+", F: "<30", D: null, "D+": null, "C-": 30, C: 35, "C+": 40, "B-": 45, B: 50, "B+": 55, "A-": 60, A: 65, "A+": 70 },
    43: { mcaGrade: "C+", F: "<30", D: null, "D+": 30, "C-": 31, C: 36, "C+": 41, "B-": 46, B: 51, "B+": 56, "A-": 61, A: 66, "A+": 71 },
    44: { mcaGrade: "C+", F: "<30", D: null, "D+": 30, "C-": 32, C: 37, "C+": 42, "B-": 47, B: 52, "B+": 57, "A-": 62, A: 67, "A+": 72 },
    45: { mcaGrade: "C+", F: "<30", D: null, "D+": 30, "C-": 33, C: 38, "C+": 43, "B-": 48, B: 53, "B+": 58, "A-": 63, A: 68, "A+": 73 },
    46: { mcaGrade: "C+", F: "<30", D: null, "D+": 30, "C-": 34, C: 39, "C+": 44, "B-": 49, B: 54, "B+": 59, "A-": 64, A: 69, "A+": 74 },
    47: { mcaGrade: "C+", F: "<30", D: null, "D+": 30, "C-": 35, C: 40, "C+": 45, "B-": 50, B: 55, "B+": 60, "A-": 65, A: 70, "A+": 75 },
    48: { mcaGrade: "C+", F: "<30", D: 30, "D+": 31, "C-": 36, C: 41, "C+": 46, "B-": 51, B: 56, "B+": 61, "A-": 66, A: 71, "A+": 76 },
    49: { mcaGrade: "C+", F: "<30", D: 30, "D+": 32, "C-": 37, C: 42, "C+": 47, "B-": 52, B: 57, "B+": 62, "A-": 67, A: 72, "A+": 77 },
    50: { mcaGrade: "B-", F: "<30", D: null, "D+": 30, "C-": 33, C: 38, "C+": 43, "B-": 48, B: 53, "B+": 58, "A-": 63, A: 68, "A+": 73 },
    51: { mcaGrade: "B-", F: "<30", D: null, "D+": 30, "C-": 34, C: 39, "C+": 44, "B-": 49, B: 54, "B+": 59, "A-": 64, A: 69, "A+": 74 },
    52: { mcaGrade: "B-", F: "<30", D: null, "D+": 30, "C-": 35, C: 40, "C+": 45, "B-": 50, B: 55, "B+": 60, "A-": 65, A: 70, "A+": 75 },
    53: { mcaGrade: "B-", F: "<30", D: 30, "D+": 31, "C-": 36, C: 41, "C+": 46, "B-": 51, B: 56, "B+": 61, "A-": 66, A: 71, "A+": 76 },
    54: { mcaGrade: "B-", F: "<30", D: 30, "D+": 32, "C-": 37, C: 42, "C+": 47, "B-": 52, B: 57, "B+": 62, "A-": 67, A: 72, "A+": 77 },
    55: { mcaGrade: "B-", F: "<30", D: 30, "D+": 33, "C-": 38, C: 43, "C+": 48, "B-": 53, B: 58, "B+": 63, "A-": 68, A: 73, "A+": 78 },
    56: { mcaGrade: "B-", F: "<30", D: 30, "D+": 34, "C-": 39, C: 44, "C+": 49, "B-": 54, B: 59, "B+": 64, "A-": 69, A: 74, "A+": 79 },
    57: { mcaGrade: "B-", F: "<30", D: 30, "D+": 35, "C-": 40, C: 45, "C+": 50, "B-": 55, B: 60, "B+": 65, "A-": 70, A: 75, "A+": 80 },
    58: { mcaGrade: "B-", F: "≤30", D: 31, "D+": 36, "C-": 41, C: 46, "C+": 51, "B-": 56, B: 61, "B+": 66, "A-": 71, A: 76, "A+": 81 },
    59: { mcaGrade: "B-", F: "≤31", D: 32, "D+": 37, "C-": 42, C: 47, "C+": 52, "B-": 57, B: 62, "B+": 67, "A-": 72, A: 77, "A+": 82 },
    60: { mcaGrade: "B-", F: "≤32", D: 33, "D+": 38, "C-": 43, C: 48, "C+": 53, "B-": 58, B: 63, "B+": 68, "A-": 73, A: 78, "A+": 83 },
    61: { mcaGrade: "B-", F: "≤33", D: 34, "D+": 39, "C-": 44, C: 49, "C+": 54, "B-": 59, B: 64, "B+": 69, "A-": 74, A: 79, "A+": 84 },
    62: { mcaGrade: "B-", F: "≤34", D: 35, "D+": 40, "C-": 45, C: 50, "C+": 55, "B-": 60, B: 65, "B+": 70, "A-": 75, A: 80, "A+": 85 },
    63: { mcaGrade: "B-", F: "≤35", D: 36, "D+": 41, "C-": 46, C: 51, "C+": 56, "B-": 61, B: 66, "B+": 71, "A-": 76, A: 81, "A+": 86 },
    64: { mcaGrade: "B-", F: "≤36", D: 37, "D+": 42, "C-": 47, C: 52, "C+": 57, "B-": 62, B: 67, "B+": 72, "A-": 77, A: 82, "A+": 87 },
    65: { mcaGrade: "B",  F: "≤32", D: 33, "D+": 38, "C-": 43, C: 48, "C+": 53, "B-": 58, B: 63, "B+": 68, "A-": 73, A: 78, "A+": 83 },
    66: { mcaGrade: "B",  F: "≤33", D: 34, "D+": 39, "C-": 44, C: 49, "C+": 54, "B-": 59, B: 64, "B+": 69, "A-": 74, A: 79, "A+": 84 },
    67: { mcaGrade: "B",  F: "≤34", D: 35, "D+": 40, "C-": 45, C: 50, "C+": 55, "B-": 60, B: 65, "B+": 70, "A-": 75, A: 80, "A+": 85 },
    68: { mcaGrade: "B",  F: "≤35", D: 36, "D+": 41, "C-": 46, C: 51, "C+": 56, "B-": 61, B: 66, "B+": 71, "A-": 76, A: 81, "A+": 86 },
    69: { mcaGrade: "B",  F: "≤36", D: 37, "D+": 42, "C-": 47, C: 52, "C+": 57, "B-": 62, B: 67, "B+": 72, "A-": 77, A: 82, "A+": 87 },
    70: { mcaGrade: "B",  F: "≤37", D: 38, "D+": 43, "C-": 48, C: 53, "C+": 58, "B-": 63, B: 68, "B+": 73, "A-": 78, A: 83, "A+": 88 },
    71: { mcaGrade: "B",  F: "≤38", D: 39, "D+": 44, "C-": 49, C: 54, "C+": 59, "B-": 64, B: 69, "B+": 74, "A-": 79, A: 84, "A+": 89 },
    72: { mcaGrade: "B",  F: "≤39", D: 40, "D+": 45, "C-": 50, C: 55, "C+": 60, "B-": 65, B: 70, "B+": 75, "A-": 80, A: 85, "A+": 90 },
    73: { mcaGrade: "B",  F: "≤40", D: 41, "D+": 46, "C-": 51, C: 56, "C+": 61, "B-": 66, B: 71, "B+": 76, "A-": 81, A: 86, "A+": 91 },
    74: { mcaGrade: "B",  F: "≤41", D: 42, "D+": 47, "C-": 52, C: 57, "C+": 62, "B-": 67, B: 72, "B+": 77, "A-": 82, A: 87, "A+": 92 },
    75: { mcaGrade: "B",  F: "≤42", D: 43, "D+": 48, "C-": 53, C: 58, "C+": 63, "B-": 68, B: 73, "B+": 78, "A-": 83, A: 88, "A+": 93 },
    76: { mcaGrade: "B",  F: "≤43", D: 44, "D+": 49, "C-": 54, C: 59, "C+": 64, "B-": 69, B: 74, "B+": 79, "A-": 84, A: 89, "A+": 94 },
    77: { mcaGrade: "B",  F: "≤44", D: 45, "D+": 50, "C-": 55, C: 60, "C+": 65, "B-": 70, B: 75, "B+": 80, "A-": 85, A: 90, "A+": 95 },
    78: { mcaGrade: "B",  F: "≤45", D: 46, "D+": 51, "C-": 56, C: 61, "C+": 66, "B-": 71, B: 76, "B+": 81, "A-": 86, A: 90, "A+": 95 },
    79: { mcaGrade: "B",  F: "≤46", D: 47, "D+": 52, "C-": 57, C: 62, "C+": 67, "B-": 72, B: 77, "B+": 82, "A-": 87, A: 90, "A+": 95 },
    80: { mcaGrade: "B",  F: "≤47", D: 48, "D+": 53, "C-": 58, C: 63, "C+": 68, "B-": 73, B: 78, "B+": 83, "A-": 88, A: 90, "A+": 95 },
    81: { mcaGrade: "B",  F: "≤48", D: 49, "D+": 54, "C-": 59, C: 64, "C+": 69, "B-": 74, B: 79, "B+": 84, "A-": 89, A: 90, "A+": 95 },
    82: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 55, "C-": 60, C: 65, "C+": 70, "B-": 75, B: 80, "B+": 85, "A-": null, A: 90, "A+": 95 },
    83: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 56, "C-": 61, C: 66, "C+": 71, "B-": 76, B: 81, "B+": 86, "A-": null, A: 90, "A+": 95 },
    84: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 57, "C-": 62, C: 67, "C+": 72, "B-": 77, B: 82, "B+": 87, "A-": null, A: 90, "A+": 95 },
    85: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 58, "C-": 63, C: 68, "C+": 73, "B-": 78, B: 83, "B+": 88, "A-": null, A: 90, "A+": 95 },
    86: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 59, "C-": 64, C: 69, "C+": 74, "B-": 79, B: 84, "B+": 89, "A-": null, A: 90, "A+": 95 },
    87: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 60, "C-": 65, C: 70, "C+": 75, "B-": 80, B: 85, "B+": null, "A-": null, A: 90, "A+": 95 },
    88: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 61, "C-": 66, C: 71, "C+": 76, "B-": 81, B: 86, "B+": null, "A-": null, A: 90, "A+": 95 },
    89: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 62, "C-": 67, C: 72, "C+": 77, "B-": 82, B: 87, "B+": null, "A-": null, A: 90, "A+": 95 },
    90: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 63, "C-": 68, C: 73, "C+": 78, "B-": 83, B: 88, "B+": null, "A-": null, A: 90, "A+": 95 },
    91: { mcaGrade: "B",  F: "≤49", D: 50, "D+": 64, "C-": 69, C: 74, "C+": 79, "B-": 84, B: 89, "B+": null, "A-": null, A: 90, "A+": 95 }
};

const GRADE_ORDER = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D"];

const GRADE_POINTS = {
    "A+": 4.00,
    "A":  4.00,
    "A-": 3.67,
    "B+": 3.33,
    "B":  3.00,
    "B-": 2.67,
    "C+": 2.33,
    "C":  2.00,
    "C-": 1.67,
    "D+": 1.33,
    "D":  1.00,
    "F":  0.00
};

// ==========================================================================
// Initialize Evaluator
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const gradeForm = document.getElementById("gradeForm");
    gradeForm.addEventListener("submit", handleEvaluation);
});

// ==========================================================================
// Core Evaluation Logic
// ==========================================================================
function evaluateGrade(roundedMca, roundedMarks) {
    const row = MCA_TABLE[roundedMca];
    if (!row) return null;

    let earnedGrade = "F";

    for (let i = 0; i < GRADE_ORDER.length; i++) {
        const grade = GRADE_ORDER[i];
        const minMarks = row[grade];

        if (minMarks !== null && roundedMarks >= minMarks) {
            earnedGrade = grade;
            break;
        }
    }

    return {
        earnedGrade,
        gpa: GRADE_POINTS[earnedGrade],
        mcaGrade: row.mcaGrade,
        row
    };
}

function handleEvaluation(event) {
    event.preventDefault();

    const courseNameInput = document.getElementById("courseName").value.trim();
    const rawMca = parseFloat(document.getElementById("mcaInput").value);
    const rawMarks = parseFloat(document.getElementById("marksInput").value);

    const roundedMca = Math.round(rawMca);
    const roundedMarks = Math.round(rawMarks);

    if (isNaN(roundedMca) || roundedMca < 30 || roundedMca > 91) {
        alert("Please enter an MCA that rounds between 30 and 91.");
        return;
    }

    if (isNaN(roundedMarks) || roundedMarks < 0 || roundedMarks > 100) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    const result = evaluateGrade(roundedMca, roundedMarks);
    const courseTitle = courseNameInput || `Course (MCA ${roundedMca})`;

    displayEvaluationResult({
        courseName: courseTitle,
        roundedMca,
        roundedMarks,
        ...result
    });
}

function displayEvaluationResult(data) {
    document.getElementById("emptyState").classList.add("hidden");
    document.getElementById("resultContent").classList.remove("hidden");

    const earnedGradeEl = document.getElementById("earnedGrade");
    earnedGradeEl.textContent = data.earnedGrade;
    earnedGradeEl.classList.toggle("fail", data.earnedGrade === "F");

    document.getElementById("gradePoints").textContent = `${data.gpa.toFixed(2)} GPA`;
    document.getElementById("displayCourseName").textContent = data.courseName;
    document.getElementById("roundedMcaVal").textContent = data.roundedMca;
    document.getElementById("baselineMcaGrade").textContent = data.mcaGrade;
    document.getElementById("roundedMarksVal").textContent = data.roundedMarks;
    document.getElementById("stripMcaLabel").textContent = data.roundedMca;

    // Active MCA Cutoff Strip
    const stripContainer = document.getElementById("thresholdStrip");
    stripContainer.innerHTML = "";

    const displayGrades = ["F", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
    displayGrades.forEach(grade => {
        const val = data.row[grade];
        if (val !== null) {
            const chip = document.createElement("div");
            chip.className = `cutoff-chip ${grade === data.earnedGrade ? "active-grade" : ""}`;
            const label = grade === "A+" ? `≥${val}` : val;
            chip.innerHTML = `<strong>${grade}</strong><span>${label}</span>`;
            stripContainer.appendChild(chip);
        }
    });
}