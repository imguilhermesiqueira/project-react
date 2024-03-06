/* eslint-env jest */

import { getMovie } from "./Movie";

jest.mock("fetch");

describe("getMovie", () => {
  it("deve buscar dados do filme e atualizar o estado", async () => {
    const mockData = { id: 1, title: "Filme Teste" };
    fetch.mockResolvedValueOnce(JSON.stringify(mockData));
    const url = "https://api.exemplo.com/filmes/1";
    const setMovie = jest.fn();
    await getMovie(url, setMovie);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(setMovie).toHaveBeenCalledWith(mockData);
  });

  it("deve lidar com erros", async () => {
    fetch.mockRejectedValueOnce(new Error("Erro de rede"));
    const url = "https://api.exemplo.com/filmes/1";
    const setMovie = jest.fn();

    try {
      await getMovie(url, setMovie);
      fail("Erro esperado não foi lançado");
    } catch (error) {
      expect(error.message).toBe("Erro de rede");
    } finally {
      expect(setMovie).not.toHaveBeenCalled();
    }
  });
});
