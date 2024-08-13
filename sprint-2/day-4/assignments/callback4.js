function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject("Sorry you haven’t cleared the coding round.");
            }
        }, 2000);
    });
}

function HUKUMUScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject("Sorry you haven’t cleared the HUKUMU round.");
            }
        }, 2000);
    });
}

function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = (averageCodingScore + averageHukumuScore) / 2;
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject("Sorry you haven’t cleared the final cutoff.");
            }
        }, 2000);
    });
}

// Testing the functions
const codingMarks = [80, 85, 90];
const HUKUMUMarks = [70, 75, 80];
const cutoff = 80;

codingScoreCheck(codingMarks, cutoff)
    .then(averageScore => {
        console.log("Coding Score Check Passed. Average Score:", averageScore);
        return HUKUMUScoreCheck(HUKUMUMarks, cutoff);
    })
    .then(averageScore => {
        console.log("HUKUMU Score Check Passed. Average Score:", averageScore);
        return unitMovementCheck(
            codingMarks.reduce((sum, mark) => sum + mark, 0) / codingMarks.length,
            HUKUMUMarks.reduce((sum, mark) => sum + mark, 0) / HUKUMUMarks.length,
            cutoff
        );
    })
    .then(averageScore => {
        console.log("Unit Movement Check Passed. Average Score:", averageScore);
    })
    .catch(error => {
        console.error("Error:", error);
    });
