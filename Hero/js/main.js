const MilestoneData = JSON.parse(data).data;

//load course milestone data

function loadMilestone(){
    const milestone = document.querySelector('.milestones');

    milestone.innerHTML = MilestoneData;
}
loadMilestone();
