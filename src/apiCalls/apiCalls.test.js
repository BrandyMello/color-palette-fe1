import {
  getProjects,
  getAllPalettes,
  getProjectPalettes,
  addNewProject,
  addNewPalette,
  updateProject,
  updatePalette,
  deleteProject,
  deletePalette
} from "./apiCalls";

const path = process.env.REACT_APP_BACKEND_URL;

describe("apiCalls", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });

  describe("getProjects", () => {
    let mockProjects;

    beforeEach(() => {
      mockProjects = [{ name: "Warm Colors" }, { name: "Cool Colors" }];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProjects)
        });
      });
    });
    it("should be called with the correct url", () => {
      const expected = path + "/api/v1/projects";
      getProjects();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
    it("should return an array of the projects", async () => {
      const results = await getProjects();

      expect(results).toEqual(mockProjects);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: "Unable to retrive your projects"
        });
      });
      expect(getProjects()).rejects.toEqual(
        Error("Unable to retrive your projects")
      );
    });
  });
  describe("getProjectPalettes", () => {
    let mockPalettes;
    let mockProject;

    beforeEach(() => {
      mockPalettes = [
        {
          name: "Autumn",
          projectName: "Warm Colors",
          colorOne: "#BC8F8F",
          colorTwo: "#A52A2A",
          colorThree: "#FF7D40",
          colorFour: "#CD3700",
          colorFive: "#993300"
        },
        {
          name: "Canyon",
          projectName: "Warm Colors",
          colorOne: "#6E352C",
          colorTwo: "#CF5230",
          colorThree: "#F59A44",
          colorFour: "#E3C598",
          colorFive: "#8A6E64"
        }
      ];

      mockProject = {
        name: "Warm Colors",
        palettes: [
          {
            name: "Autumn",
            projectName: "Warm Colors",
            colorOne: "#BC8F8F",
            colorTwo: "#A52A2A",
            colorThree: "#FF7D40",
            colorFour: "#CD3700",
            colorFive: "#993300"
          },
          {
            name: "Canyon",
            projectName: "Warm Colors",
            colorOne: "#6E352C",
            colorTwo: "#CF5230",
            colorThree: "#F59A44",
            colorFour: "#E3C598",
            colorFive: "#8A6E64"
          },
          {
            name: "Spiced",
            projectName: "Warm Colors",
            colorOne: "#F7E5D4",
            colorTwo: "#FADDAF",
            colorThree: "#EB712F",
            colorFour: "#91371B",
            colorFive: "#472C25"
          }
        ]
      };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalettes)
        });
      });
    });
    it("should be called with the correct url", async () => {
      const expected = path + `/api/v1/projects/${mockProject.id}/palettes`;
      await getProjectPalettes(mockProject);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
    it("should return an array of palettes for the specified project", async () => {
      const results = await getProjectPalettes(mockProject);
      expect(results).toEqual(mockPalettes);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: "Unable to retrive your palettes for this project"
        });
      });
      expect(getProjectPalettes()).rejects.toEqual(
        Error("Unable to retrive your palettes for this project")
      );
    });
  });
  describe("getAllPalettes", () => {
    let mockPalettes;

    beforeEach(() => {
      mockPalettes = [
        {
          name: "Autumn",
          projectName: "Warm Colors",
          colorOne: "#BC8F8F",
          colorTwo: "#A52A2A",
          colorThree: "#FF7D40",
          colorFour: "#CD3700",
          colorFive: "#993300"
        },
        {
          name: "Canyon",
          projectName: "Warm Colors",
          colorOne: "#6E352C",
          colorTwo: "#CF5230",
          colorThree: "#F59A44",
          colorFour: "#E3C598",
          colorFive: "#8A6E64"
        }
      ];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPalettes)
        });
      });
    });
    it("should be called with the correct url", () => {
      const expected = path + "/api/v1/palettes";
      getAllPalettes();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
    it("should return an array of the projects", async () => {
      const results = await getAllPalettes();

      expect(results).toEqual(mockPalettes);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: "Unable to retrive your palettes"
        });
      });
      expect(getAllPalettes()).rejects.toEqual(
        Error("Unable to retrive your palettes")
      );
    });
  });
  describe("addNewProject", () => {
    let mockResponse;
    let mockProject;

    beforeEach(() => {
      mockResponse = 422;
      mockProject = {
        name: "Autumn Breeze"
      };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
    it("should be called with the correct parameters", () => {
      const expected = [
        path + "/api/v1/projects",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockProject)
        }
      ];
      addNewProject(mockProject);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it("should return the id for the added project", async () => {
      const results = await addNewProject();
      expect(results).toEqual(mockResponse);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          error: "Unable to create this project"
        });
      });
      expect(addNewProject()).rejects.toEqual(
        Error("Unable to create this project")
      );
    });
  });
  describe("addNewPalette", () => {
    let mockResponse;
    let mockPalette;

    beforeEach(() => {
      mockResponse = 422;
      mockPalette = {
        name: "Canyon",
        projectName: "Warm Colors",
        colorOne: "#6E352C",
        colorTwo: "#CF5230",
        colorThree: "#F59A44",
        colorFour: "#E3C598",
        colorFive: "#8A6E64"
      };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
    it("should be called with the correct parameters", () => {
      const expected = [
        path + "/api/v1/palettes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockPalette)
        }
      ];
      addNewPalette(mockPalette);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it("should return the id for the added palette", async () => {
      const results = await addNewPalette();
      expect(results).toEqual(mockResponse);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          error: "Unable to create this palette"
        });
      });
      expect(addNewPalette()).rejects.toEqual(
        Error("Unable to create this palette")
      );
    });
  });
  describe("updateProject", () => {
    let mockProject;
    let mockId;

    beforeEach(() => {
      mockProject = { name: "Sunset Breeze", id: 32 };
      mockId = 32;

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockId)
        });
      });
    });
    it("should be called with the correct parameters", () => {
      const expected = [
        path + `/api/v1/projects/${mockId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockProject)
        }
      ];
      updateProject(mockProject);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it("should return the id of the project that has been edited", async () => {
      const results = await updateProject(mockProject);
      expect(results).toEqual(mockId);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(updateProject()).rejects.toEqual(
        Error("Could not update Project Name")
      );
    });
  });
  describe("updatePalette", () => {
    let mockPalette;
    let mockId;

    beforeEach(() => {
      mockPalette = { name: "Winter Pine", id: 32 };
      mockId = 32;

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockId)
        });
      });
    });
    it("should be called with the correct parameters", () => {
      const expected = [
        path + `/api/v1/palettes/${mockId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockPalette)
        }
      ];
      updatePalette(mockPalette);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it("should return the id of the palette that has been edited", async () => {
      const results = await updatePalette(mockPalette);
      expect(results).toEqual(mockId);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(updatePalette()).rejects.toEqual(
        Error("Could not update Project Name")
      );
    });
  });
  describe("deleteProject", () => {
    let mockId;

    beforeEach(() => {
      mockId = 24;

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockId)
        });
      });
    });
    it("should be called with the correct parameters", () => {
      const expected = [
        path + `/api/v1/projects/${mockId}`,
        {
          method: "DELETE"
        }
      ];
      deleteProject(mockId);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it.skip("should return that id of the project that was deleted", async () => {
      const results = await deleteProject(mockId);
      expect(results).toEqual(mockId);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(deleteProject()).rejects.toEqual(
        Error("Error deleting this project")
      );
    });
  });
  describe("deletePalette", () => {
    let mockId;

    beforeEach(() => {
      mockId = 24;

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockId)
        });
      });
    });
    it("should be called with the correct parameters", () => {
      const expected = [
        path + `/api/v1/palettes/${mockId}`,
        {
          method: "DELETE"
        }
      ];
      deletePalette(mockId);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it.skip("should return the id of the deleted palette", async () => {
      const results = await deletePalette(mockId);
      expect(results).toEqual(mockId);
    });
    it("should return an error if the fetch is not able to be completed", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(deletePalette()).rejects.toEqual(
        Error("Error deleting this palette")
      );
    });
  });
});
