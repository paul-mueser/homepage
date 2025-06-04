import axios from 'axios';

const API_URL = '{{API_URL}}';

export const fetchProjects = async () => {
    const result = await axios.get(`${API_URL}/api/fetch-projects`);
    for (project of result.data) {
        const res = await axios.get(`${API_URL}/api/fetch-project-links`, { params: { projectname: project.name } });
        project.links = res.data;
    }
    return result.data;
}
