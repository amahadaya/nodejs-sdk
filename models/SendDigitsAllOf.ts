/**
 * FreeClimb API
 * FreeClimb is a cloud-based application programming interface (API) that puts the power of the Vail platform in your hands. FreeClimb simplifies the process of creating applications that can use a full range of telephony features without requiring specialized or on-site telephony equipment. Using the FreeClimb REST API to write applications is easy! You have the option to use the language of your choice or hit the API directly. Your application can execute a command by issuing a RESTful request to the FreeClimb API. The base URL to send HTTP requests to the FreeClimb REST API is: /apiserver. FreeClimb authenticates and processes your request.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@freeclimb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SendDigitsAllOf {
    /**
    * String containing the digits to be played. The string cannot be empty and can include any digit, plus `#`, or `*`, and allows embedding specification for delay or pause between the output of individual digits.
    */
    'digits': string;
    /**
    * Pause between digits in milliseconds. Valid values are 100-1000 milliseconds and will be adjusted by FreeClimb to satisfy the constraint.
    */
    'pauseMs'?: number;
    /**
    * Parameter `privacyMode` will not log the `text` as required by PCI compliance.
    */
    'privacyMode'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "digits",
            "baseName": "digits",
            "type": "string",
            "format": ""
        },
        {
            "name": "pauseMs",
            "baseName": "pauseMs",
            "type": "number",
            "format": ""
        },
        {
            "name": "privacyMode",
            "baseName": "privacyMode",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendDigitsAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

