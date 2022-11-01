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

import { Capabilities } from './Capabilities';
import { IncomingNumberResultAllOf } from './IncomingNumberResultAllOf';
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
    'capabilities'?: Capabilities;
    'campaignId'?: string;
    'phoneNumberId'?: string;
    'accountId'?: string;
    'applicationId'?: string;
    'phoneNumber'?: string;
    'alias'?: string;
    'region'?: string;
    'country'?: string;
    'voiceEnabled'?: boolean;
    'smsEnabled'?: boolean;
    'offnet'?: boolean;
}
export class IncomingNumberResult {
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
    'capabilities'?: Capabilities;
    /**
    * The campaign ID generated by the campaign registry
    */
    'campaignId'?: string;
    /**
    * String that uniquely identifies this phone number resource.
    */
    'phoneNumberId'?: string;
    /**
    * ID of the account that owns this phone number.
    */
    'accountId'?: string;
    /**
    * ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId.
    */
    'applicationId'?: string;
    /**
    * Phone number in E.164 format.
    */
    'phoneNumber'?: string;
    /**
    * Description for this phone number. Typically the conventionally-formatted version of the phone number.
    */
    'alias'?: string;
    /**
    * State or province of this phone number.
    */
    'region'?: string;
    /**
    * Country of this phone number.
    */
    'country'?: string;
    /**
    * Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
    */
    'voiceEnabled'?: boolean;
    /**
    * Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
    */
    'smsEnabled'?: boolean;
    /**
    * The offnet field is a boolean representing whether the number is offnet registered or not. This field will be rendered only for requests to the IncomingPhone number resource.
    */
    'offnet'?: boolean;

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
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "Capabilities",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "campaignId",
            "baseName": "campaignId",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "phoneNumberId",
            "baseName": "phoneNumberId",
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
        },
        {
            "name": "applicationId",
            "baseName": "applicationId",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "alias",
            "baseName": "alias",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "voiceEnabled",
            "baseName": "voiceEnabled",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "smsEnabled",
            "baseName": "smsEnabled",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "offnet",
            "baseName": "offnet",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return IncomingNumberResult.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = IncomingNumberResult.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

