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

import { ConferenceResultAllOf } from './ConferenceResultAllOf';
import { ConferenceStatus } from './ConferenceStatus';
import { MutableResourceModel } from './MutableResourceModel';
import { PlayBeep } from './PlayBeep';
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
    'conferenceId'?: string;
    'accountId'?: string;
    'alias'?: string;
    'playBeep'?: PlayBeep;
    'record'?: boolean;
    'status'?: ConferenceStatus;
    'waitUrl'?: string;
    'actionUrl'?: string;
    'statusCallbackUrl'?: string;
    'subresourceUris'?: any;
}
export class ConferenceResult {
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
    * A string that uniquely identifies this Conference resource.
    */
    'conferenceId'?: string;
    /**
    * ID of the account that created this Conference.
    */
    'accountId'?: string;
    /**
    * A description for this Conference.
    */
    'alias'?: string;
    'playBeep'?: PlayBeep;
    /**
    * Flag indicating whether recording is enabled for this Conference.
    */
    'record'?: boolean;
    'status'?: ConferenceStatus;
    /**
    * URL referencing the audio file to be used as default wait music for the Conference when it is in the populated state.
    */
    'waitUrl'?: string;
    /**
    * URL invoked once the Conference is successfully created.
    */
    'actionUrl'?: string;
    /**
    * URL to inform that the Conference status has changed.
    */
    'statusCallbackUrl'?: string;
    /**
    * The list of subresources for this Conference. This includes participants and/or recordings.
    */
    'subresourceUris'?: any;

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
            "name": "conferenceId",
            "baseName": "conferenceId",
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
            "name": "alias",
            "baseName": "alias",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "playBeep",
            "baseName": "playBeep",
            "type": "PlayBeep",
            "format": "",

            
            "defaultValue": PlayBeep.ALWAYS
        },
        {
            "name": "record",
            "baseName": "record",
            "type": "boolean",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ConferenceStatus",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "waitUrl",
            "baseName": "waitUrl",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "statusCallbackUrl",
            "baseName": "statusCallbackUrl",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "subresourceUris",
            "baseName": "subresourceUris",
            "type": "any",
            "format": "",

            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return ConferenceResult.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = ConferenceResult.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

