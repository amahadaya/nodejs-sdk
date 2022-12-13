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

import { MessageRequestAllOf } from './MessageRequestAllOf';
import { MutableResourceModel } from './MutableResourceModel';
import { HttpFile } from '../http/http';


interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'uri'?: string;
    'dateCreated'?: string;
    'dateUpdated'?: string;
    'revision'?: number;
    '_from': string;
    'to': string;
    'text': string;
    'notificationUrl'?: string;
    'accountId'?: string;
}
export class MessageRequest {
    /**
    * The URI for this resource, relative to /apiserver.
    */
    'uri'?: string;
    /**
    * The date that this resource was created (GMT) in RFC 1123 format (e.g., Mon, 15 Jun 2009 20:45:30 GMT).
    */
    'dateCreated'?: string;
    /**
    * The date that this resource was last updated (GMT) in RFC 1123 format (e.g., Mon, 15 Jun 2009 20:45:30 GMT).
    */
    'dateUpdated'?: string;
    /**
    * Revision count for the resource. This count is set to 1 on creation and is incremented every time it is updated.
    */
    'revision'?: number;
    /**
    * Phone number to use as the sender. This must be an incoming phone number that you have purchased from FreeClimb.
    */
    '_from': string;
    /**
    * Phone number to receive the message. Must be within FreeClimb's service area.
    */
    'to': string;
    /**
    * Text contained in the message (maximum 160 characters).   **Note:** For text, only ASCII characters are supported.
    */
    'text': string;
    /**
    * When the Message changes status, this URL is invoked using HTTP POST with the messageStatus parameters.  **Note:** This is a notification only; any PerCL returned is ignored.
    */
    'notificationUrl'?: string;
    /**
    * String that uniquely identifies this account resource.
    */
    'accountId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "dateCreated",
            "baseName": "dateCreated",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "dateUpdated",
            "baseName": "dateUpdated",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "number",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "notificationUrl",
            "baseName": "notificationUrl",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return MessageRequest.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = MessageRequest.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

