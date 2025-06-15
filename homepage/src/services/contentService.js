import axios from 'axios';

const API_URL = '{{API_URL}}';

export const fetchProjects = async () => {
    try {
        const result = await axios.get(`${API_URL}/api/fetch-projects`);
        for (const project of result.data) {
            try {
                const res = await axios.post(`${API_URL}/api/fetch-project-links`, { projectName: project.name });
                project.links = res.data;
            } catch (err) {
            }
        }
        return result.data;
    } catch (err) {
        console.error("Error fetching projects:", err);
        return [
        {
          title: "No Projects",
          description: "There are no projects available at the moment.",
          links: []
        }
      ];
    }
}
