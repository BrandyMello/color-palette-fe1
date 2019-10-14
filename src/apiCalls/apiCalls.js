const path = process.env.REACT_APP_BACKEND_URL;

export const getProjects = async name => {
  try {
    const url = path + "/api/v1/projects";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("There was an error getting your projects");
    }
    const projects = await response.json();
    return projects;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const getPalettes = async name => {
  try {
    const url = path + "/api/v1/palettes";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("There was an error getting your palettes");
    }
    const palettes = await response.json();
    console.log(palettes);
    return palettes;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const addNewProject = async project => {
  try {
    const url = path + "/api/v1/projects";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    };

    const response = await fetch(url, options);
    const addedProject = response.json();
    return addedProject;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const addNewPalette = async palette => {
  try {
    const url = path + "/api/v1/palettes";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(palette)
    };

    const response = await fetch(url, options);
    const addedPalette = response.json();
    return addedPalette;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const updateProject = async project => {
  try {
    const url = path + `/api/v1/projects/${project.id}`;
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    };

    const response = await fetch(url, options);
    const modifiedProject = response.json();
    return modifiedProject;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const updatePalette = async palette => {
  try {
    const url = path + `/api/v1/palettes/${palette.id}`;
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(palette)
    };

    const response = await fetch(url, options);
    const modifiedProject = response.json();
    return modifiedProject;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const deleteProject = async id => {
  try {
    const url = path + `/api/v1/projects/${id}`;
    const options = {
      method: "DELETE"
    };

    const response = await fetch(url, options);
    return response;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const deletePalette = async id => {
  try {
    const url = path + `/api/v1/projects/${id}`;
    const options = {
      method: "DELETE"
    };

    const response = await fetch(url, options);
    return response;
  } catch ({ message }) {
    throw new Error(message);
  }
};
