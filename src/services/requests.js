import api from "./api";

export const handleLogin = async (body) => {
  return api
    .post("users/login", {
      ...body,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(
        err.response && err.response.data
          ? err.response.data.message
          : { message: "Deu ruim" }
      );
    });
};

export const handleGetUser = async (token) => {
  return api
    .get("/navers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(
        err.response && err.response.data
          ? err.response.data.message
          : { message: "Não foi possivel trazer o usuário" }
      );
    });
};

export const handleGetUserInformations = async (id) => {
  const token = window.localStorage.getItem("token");
  return api
    .get(`/navers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(
        err.response && err.response.data
          ? err.response.data.message
          : { message: "Não foi possivel trazer os dados desse usuário" }
      );
    });
};

export const handleCreateNaver = async (body) => {
  const token = window.localStorage.getItem("token");
  console.log(token);
  return api
    .post(
      "/navers",
      { ...body },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(
        err.response && err.response.data
          ? err.response.data.message
          : { message: "Não foi possivel criar o seu usuário" }
      );
    });
};

export const handleEditNaver = async (id) => {
  const token = window.localStorage.getItem("token");
  return api
    .put(`/navers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(
        err.response && err.response.data
          ? err.response.data.message
          : { message: "Não foi possivel criar o seu usuário" }
      );
    });
};

export const handleDeleteNaver = async (id) => {
  const token = window.localStorage.getItem("token");
  return api
    .delete(`navers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(
        err.response && err.response.data
          ? err.response.data.message
          : { message: "Não foi possivel excluir o usuário" }
      );
    });
};
