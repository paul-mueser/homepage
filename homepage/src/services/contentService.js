import axios from 'axios';

const API_URL = '{{API_URL}}';

export const fetchProjects = async () => {
    const result = await axios.get(`${API_URL}/api/fetch-projects`);
    for (const project of result.data) {
        const res = await axios.post(`${API_URL}/api/fetch-project-links`, { projectName: project.name });
        project.links = res.data;
    }
    return result.data;
}
