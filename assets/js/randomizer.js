document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pickButton').addEventListener('click', async () => {
    const xURL = document.getElementById('xURL').value;
    const varHashtag = document.getElementById('varHashtag').value;

    try {
        // Fetch x data and extract comments
        const comments = await fetchXData(xURL);
        console.log('Comments:', comments);
        
        // Extract and filter qualified contestants
        const qualifiedContestants = filterQualifiedContestants(comments, varHashtag);
        console.log('Qualified Contestants:', qualifiedContestants);
        
        // Perform cryptographic randomization
        const winnerIndex = randomizeWinner(qualifiedContestants);
        console.log('Winner Index:', winnerIndex);
        
        // Display the winner's handle
        if (winnerIndex !== -1) {
            document.getElementById('winnerHandle').textContent = `Winner: ${qualifiedContestants[winnerIndex].userHandle}`;
        } else {
            document.getElementById('winnerHandle').textContent = 'No Winner Found';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('winnerHandle').textContent = 'Error Occurred';
    }
});
