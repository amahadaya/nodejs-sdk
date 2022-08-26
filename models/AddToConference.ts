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

import { AddToConferenceAllOf } from './AddToConferenceAllOf';
import { CreateConference } from './CreateConference';
import { Dequeue } from './Dequeue';
import { Enqueue } from './Enqueue';
import { GetDigits } from './GetDigits';
import { GetSpeech } from './GetSpeech';
import { Hangup } from './Hangup';
import { OutDial } from './OutDial';
import { Pause } from './Pause';
import { PerclCommand } from './PerclCommand';
import { Play } from './Play';
import { PlayEarlyMedia } from './PlayEarlyMedia';
import { RecordUtterance } from './RecordUtterance';
import { Redirect } from './Redirect';
import { Reject } from './Reject';
import { RemoveFromConference } from './RemoveFromConference';
import { Say } from './Say';
import { SendDigits } from './SendDigits';
import { SetListen } from './SetListen';
import { SetTalk } from './SetTalk';
import { Sms } from './Sms';
import { StartRecordCall } from './StartRecordCall';
import { TerminateConference } from './TerminateConference';
import { HttpFile } from '../http/http';

/**
* The `AddToConference` command adds a Participant to a Conference. If this Participant currently is in another Conference, the Participant is first removed from that Conference. Two Call legs can be bridged together by creating a Conference and adding both Call legs to it via `AddToConference`.
*/
interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'allowCallControl'?: boolean;
    'callControlSequence'?: string;
    'callControlUrl'?: string;
    'conferenceId': string;
    'callId'?: boolean;
    'leaveConferenceUrl'?: string;
    'listen'?: boolean;
    'notificationUrl'?: string;
    'startConfOnEnter'?: boolean;
    'talk'?: boolean;
}
export class AddToConference extends PerclCommand {
    /**
    * If `true`, Call control will be enabled for this Participant's Call leg.
    */
    'allowCallControl'?: boolean;
    /**
    * Defines a sequence of digits that, when entered by this caller, invokes the `callControlUrl`. Only digits plus '*', and '#' may be used.
    */
    'callControlSequence'?: string;
    /**
    * URL to be invoked when this Participant enters the digit sequence defined in the `callControlSequence` attribute.
    */
    'callControlUrl'?: string;
    /**
    * ID of the Conference to which to add the Participant (Call leg). Conference must exist or an error will result.
    */
    'conferenceId': string;
    /**
    * ID of the Call that will be added to the specified Conference. The Call must be in progress or an error will result. If the Call is part of an existing Conference, it is first removed from that Conference and is then moved to the new one.
    */
    'callId'?: boolean;
    /**
    * URL to be invoked when the Participant leaves the Conference. 
    */
    'leaveConferenceUrl'?: string;
    /**
    * If `true`, the Participant joins the Conference with listen privileges. This may be modified later via the REST API or `SetListen` PerCL command.
    */
    'listen'?: boolean;
    /**
    * When the Participant enters the Conference, this URL will be invoked using an HTTP POST request with the standard request parameters.
    */
    'notificationUrl'?: string;
    /**
    * Flag that indicates whether a Conference starts upon entry of this particular Participant. This is usually set to `true` for moderators and `false` for all other Participants.
    */
    'startConfOnEnter'?: boolean;
    /**
    * If `true`, the Participant joins the Conference with talk privileges. This may be modified later via the REST API or `SetTalk` PerCL command. 
    */
    'talk'?: boolean;

    static readonly discriminator: string | undefined = "command";

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "allowCallControl",
            "baseName": "allowCallControl",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "callControlSequence",
            "baseName": "callControlSequence",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "callControlUrl",
            "baseName": "callControlUrl",
            "type": "string",
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
            "name": "callId",
            "baseName": "callId",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "leaveConferenceUrl",
            "baseName": "leaveConferenceUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "listen",
            "baseName": "listen",
            "type": "boolean",
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
            "name": "startConfOnEnter",
            "baseName": "startConfOnEnter",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "talk",
            "baseName": "talk",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return super.getAttributeTypeMap().concat(AddToConference.attributeTypeMap);
    }

    public constructor(args: ArgumentsType) {
        super({ command: "AddToConference" });
        const preparedArgs = AddToConference.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

