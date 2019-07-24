import { IGithubReposResponseModel } from "./github-repos-response.model";

export interface IGithubResponseModel {
    name: string;
    location: string;
    avatar_url: string;
    repos_url: string;

    repos: IGithubReposResponseModel[];
}