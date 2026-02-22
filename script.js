const jobsData = [
  { id: 1, company: "TechNova BD", position: "Frontend Developer", location: "Dhaka", type: "Full-time", salary: "80,000", description: "Develop modern web applications using React.", status: "all" },
  { id: 2, company: "CodeLab Bangladesh", position: "Backend Developer", location: "Chattogram", type: "Full-time", salary: "95,000", description: "Build scalable backend APIs and services.", status: "all" },
  { id: 3, company: "Designify Studio", position: "UI/UX Designer", location: "Remote", type: "Contract", salary: "70,000", description: "Design clean and user-friendly interfaces.", status: "all" },
  { id: 4, company: "DataPro BD", position: "Data Analyst", location: "Dhaka", type: "Full-time", salary: "85,000", description: "Analyze business data and create reports.", status: "all" },
  { id: 5, company: "CloudNet Ltd", position: "DevOps Engineer", location: "Remote", type: "Full-time", salary: "1,10,000", description: "Manage cloud servers and CI/CD pipelines.", status: "all" },
  { id: 6, company: "AppWorks BD", position: "Mobile Developer", location: "Sylhet", type: "Full-time", salary: "90,000", description: "Develop Android and iOS mobile apps.", status: "all" },
  { id: 7, company: "CyberTech BD", position: "Security Engineer", location: "Dhaka", type: "Full-time", salary: "1,05,000", description: "Ensure application and system security.", status: "all" },
  { id: 8, company: "BrightSoft Solutions", position: "QA Engineer", location: "Khulna", type: "Full-time", salary: "75,000", description: "Test software for bugs and performance.", status: "all" }
];

let currentTab = "all";

const jobsContainer = document.getElementById("jobsContainer");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const totalCount = document.getElementById("totalCount");
const tabCount = document.getElementById("tabCount");

function renderJobs() {
  jobsContainer.innerHTML = "";

  const filtered = currentTab === "all"
    ? jobsData
    : jobsData.filter(job => job.status === currentTab);

  tabCount.innerText = filtered.length + " Jobs";

  if (filtered.length === 0) {
    jobsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20">
        <img src="jobs.png" class="w-40 mb-4" />
        <h3 class="text-xl font-semibold">No jobs available</h3>
        <p class="text-gray-500">Check back later for new opportunities</p>
      </div>
    `;
    updateCounts();
    return;
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow";

    div.innerHTML = `
      <div class="card-body relative">

        <!-- Delete Icon -->
        <button onclick="deleteJob(${job.id})"
          class="absolute top-4 right-4 text-gray-400 hover:text-error transition">

          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">

            <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 7h12M9 7V4h6v3m-7 4v6m4-6v6m5 4H7a2 2 0 01-2-2V7h14v12a2 2 0 01-2 2z" />
          </svg>

        </button>

        <h2 class="card-title">${job.company}</h2>
        <p class="font-semibold">${job.position}</p>
        <p>${job.location} | ${job.type}</p>
        <p class="font-medium">${job.salary}</p>
        <p class="text-sm text-gray-500">${job.description}</p>

        <div class="card-actions mt-4">
          <button onclick="updateStatus(${job.id}, 'interview')"
            class="btn btn-sm btn-info btn-outline">Interview</button>

          <button onclick="updateStatus(${job.id}, 'rejected')"
            class="btn btn-sm btn-error btn-outline">Rejected</button>
        </div>

      </div>
    `;

    jobsContainer.appendChild(div);
  });

  updateCounts();
}

function updateStatus(id, status) {
  const job = jobsData.find(j => j.id === id);
  job.status = job.status === status ? "all" : status;
  renderJobs();
}

function deleteJob(id) {
  const index = jobsData.findIndex(j => j.id === id);
  jobsData.splice(index, 1);
  renderJobs();
}

function updateCounts() {
  totalCount.innerText = jobsData.length;
  interviewCount.innerText = jobsData.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobsData.filter(j => j.status === "rejected").length;
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", function () {
    document.querySelector(".tab-active").classList.remove("tab-active");
    this.classList.add("tab-active");
    currentTab = this.dataset.tab;
    renderJobs();
  });
});

renderJobs();