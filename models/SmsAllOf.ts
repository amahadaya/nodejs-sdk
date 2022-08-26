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

interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'to': string;
    '_from': string;
    'text': string;
    'notificationUrl'?: string;
}
export class SmsAllOf {
    /**
    * E.164 representation of the phone number to which the message will be sent. Must be within FreeClimb's service area and E.164 formatting (e.g., +18003608245).
    */
    'to': string;
    /**
    * E.164 representation of the phone number to use as the sender. This must be an incoming phone number you have purchased from FreeClimb.
    */
    '_from': string;
    /**
    * Text contained in the message (maximum 160 characters).
    */
    'text': string;
    /**
    * When the message changes status, this URL will be invoked using HTTP POST with the messageStatus parameters. This is a notification only; any PerCL returned will be ignored.
    */
    'notificationUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
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
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return SmsAllOf.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = SmsAllOf.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

