/**
 * ConsumerPageTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {ConsumerPage} from "./ConsumerPage";
import {ConsumerPageCollection} from "./ConsumerPageCollection";

export class ConsumerPageTag extends TagAbstract {
    /**
     * @returns {Promise<ConsumerPage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(pageId: string): Promise<ConsumerPage> {
        const url = this.parser.url('/consumer/page/:page_id', {
            'page_id': pageId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<ConsumerPage>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new CommonMessageException(error.response.data);
                    case 404:
                        throw new CommonMessageException(error.response.data);
                    case 410:
                        throw new CommonMessageException(error.response.data);
                    case 500:
                        throw new CommonMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<ConsumerPageCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<ConsumerPageCollection> {
        const url = this.parser.url('/consumer/page', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }),
        };

        try {
            const response = await this.httpClient.request<ConsumerPageCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new CommonMessageException(error.response.data);
                    case 500:
                        throw new CommonMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
