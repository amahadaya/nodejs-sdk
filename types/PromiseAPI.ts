import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountRequest } from '../models/AccountRequest';
import { AccountResult } from '../models/AccountResult';
import { AccountResultAllOf } from '../models/AccountResultAllOf';
import { AddToConference } from '../models/AddToConference';
import { AddToConferenceAllOf } from '../models/AddToConferenceAllOf';
import { ApplicationList } from '../models/ApplicationList';
import { ApplicationListAllOf } from '../models/ApplicationListAllOf';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { ApplicationResult } from '../models/ApplicationResult';
import { ApplicationResultAllOf } from '../models/ApplicationResultAllOf';
import { AvailableNumber } from '../models/AvailableNumber';
import { AvailableNumberList } from '../models/AvailableNumberList';
import { AvailableNumberListAllOf } from '../models/AvailableNumberListAllOf';
import { BuyIncomingNumberRequest } from '../models/BuyIncomingNumberRequest';
import { CallList } from '../models/CallList';
import { CallListAllOf } from '../models/CallListAllOf';
import { CallResult } from '../models/CallResult';
import { CallResultAllOf } from '../models/CallResultAllOf';
import { Capabilities } from '../models/Capabilities';
import { ConferenceList } from '../models/ConferenceList';
import { ConferenceListAllOf } from '../models/ConferenceListAllOf';
import { ConferenceParticipantList } from '../models/ConferenceParticipantList';
import { ConferenceParticipantListAllOf } from '../models/ConferenceParticipantListAllOf';
import { ConferenceParticipantResult } from '../models/ConferenceParticipantResult';
import { ConferenceParticipantResultAllOf } from '../models/ConferenceParticipantResultAllOf';
import { ConferenceResult } from '../models/ConferenceResult';
import { ConferenceResultAllOf } from '../models/ConferenceResultAllOf';
import { CreateConference } from '../models/CreateConference';
import { CreateConferenceAllOf } from '../models/CreateConferenceAllOf';
import { CreateConferenceRequest } from '../models/CreateConferenceRequest';
import { Dequeue } from '../models/Dequeue';
import { Enqueue } from '../models/Enqueue';
import { EnqueueAllOf } from '../models/EnqueueAllOf';
import { FilterLogsRequest } from '../models/FilterLogsRequest';
import { GetDigits } from '../models/GetDigits';
import { GetDigitsAllOf } from '../models/GetDigitsAllOf';
import { GetSpeech } from '../models/GetSpeech';
import { GetSpeechAllOf } from '../models/GetSpeechAllOf';
import { Hangup } from '../models/Hangup';
import { HangupAllOf } from '../models/HangupAllOf';
import { IncomingNumberList } from '../models/IncomingNumberList';
import { IncomingNumberListAllOf } from '../models/IncomingNumberListAllOf';
import { IncomingNumberRequest } from '../models/IncomingNumberRequest';
import { IncomingNumberResult } from '../models/IncomingNumberResult';
import { IncomingNumberResultAllOf } from '../models/IncomingNumberResultAllOf';
import { LogList } from '../models/LogList';
import { LogListAllOf } from '../models/LogListAllOf';
import { LogResult } from '../models/LogResult';
import { MakeCallRequest } from '../models/MakeCallRequest';
import { MessageRequest } from '../models/MessageRequest';
import { MessageRequestAllOf } from '../models/MessageRequestAllOf';
import { MessageResult } from '../models/MessageResult';
import { MessageResultAllOf } from '../models/MessageResultAllOf';
import { MessagesList } from '../models/MessagesList';
import { MessagesListAllOf } from '../models/MessagesListAllOf';
import { MutableResourceModel } from '../models/MutableResourceModel';
import { OutDial } from '../models/OutDial';
import { OutDialAllOf } from '../models/OutDialAllOf';
import { PaginationModel } from '../models/PaginationModel';
import { Park } from '../models/Park';
import { ParkAllOf } from '../models/ParkAllOf';
import { Pause } from '../models/Pause';
import { PauseAllOf } from '../models/PauseAllOf';
import { PerclCommand } from '../models/PerclCommand';
import { PerclScript } from '../models/PerclScript';
import { Play } from '../models/Play';
import { PlayAllOf } from '../models/PlayAllOf';
import { PlayEarlyMedia } from '../models/PlayEarlyMedia';
import { PlayEarlyMediaAllOf } from '../models/PlayEarlyMediaAllOf';
import { QueueList } from '../models/QueueList';
import { QueueListAllOf } from '../models/QueueListAllOf';
import { QueueMember } from '../models/QueueMember';
import { QueueMemberList } from '../models/QueueMemberList';
import { QueueMemberListAllOf } from '../models/QueueMemberListAllOf';
import { QueueRequest } from '../models/QueueRequest';
import { QueueResult } from '../models/QueueResult';
import { QueueResultAllOf } from '../models/QueueResultAllOf';
import { RecordUtterance } from '../models/RecordUtterance';
import { RecordUtteranceAllOf } from '../models/RecordUtteranceAllOf';
import { RecordingList } from '../models/RecordingList';
import { RecordingListAllOf } from '../models/RecordingListAllOf';
import { RecordingResult } from '../models/RecordingResult';
import { RecordingResultAllOf } from '../models/RecordingResultAllOf';
import { Redirect } from '../models/Redirect';
import { RedirectAllOf } from '../models/RedirectAllOf';
import { Reject } from '../models/Reject';
import { RejectAllOf } from '../models/RejectAllOf';
import { RemoveFromConference } from '../models/RemoveFromConference';
import { RemoveFromConferenceAllOf } from '../models/RemoveFromConferenceAllOf';
import { Say } from '../models/Say';
import { SayAllOf } from '../models/SayAllOf';
import { SendDigits } from '../models/SendDigits';
import { SendDigitsAllOf } from '../models/SendDigitsAllOf';
import { SetListen } from '../models/SetListen';
import { SetListenAllOf } from '../models/SetListenAllOf';
import { SetTalk } from '../models/SetTalk';
import { SetTalkAllOf } from '../models/SetTalkAllOf';
import { Sms } from '../models/Sms';
import { SmsAllOf } from '../models/SmsAllOf';
import { StartRecordCall } from '../models/StartRecordCall';
import { TerminateConference } from '../models/TerminateConference';
import { TerminateConferenceAllOf } from '../models/TerminateConferenceAllOf';
import { Unpark } from '../models/Unpark';
import { UpdateCallRequest } from '../models/UpdateCallRequest';
import { UpdateConferenceParticipantRequest } from '../models/UpdateConferenceParticipantRequest';
import { UpdateConferenceRequest } from '../models/UpdateConferenceRequest';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Buy a Phone Number
     
     * @param buyIncomingNumberRequest Incoming Number transaction details
     
     */
    public buyAPhoneNumber(buyIncomingNumberRequest: BuyIncomingNumberRequest, _options?: Configuration): Promise<IncomingNumberResult> {
        const result = this.api.buyAPhoneNumber(buyIncomingNumberRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a Conference
     
     * @param createConferenceRequest Conference to create
     
     */
    public createAConference(createConferenceRequest?: CreateConferenceRequest, _options?: Configuration): Promise<ConferenceResult> {
        const result = this.api.createAConference(createConferenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a Queue
     
     * @param queueRequest Queue details used to create a queue
     
     */
    public createAQueue(queueRequest?: QueueRequest, _options?: Configuration): Promise<QueueResult> {
        const result = this.api.createAQueue(queueRequest, _options);
        return result.toPromise();
    }

    /**
     * Create an application
     
     * @param applicationRequest Application Details
     
     */
    public createAnApplication(applicationRequest?: ApplicationRequest, _options?: Configuration): Promise<ApplicationResult> {
        const result = this.api.createAnApplication(applicationRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Recording
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public deleteARecording(recordingId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteARecording(recordingId, _options);
        return result.toPromise();
    }

    /**
     * Delete an application
     
     * @param applicationId String that uniquely identifies this application resource.
     
     */
    public deleteAnApplication(applicationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAnApplication(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Delete an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     
     */
    public deleteAnIncomingNumber(phoneNumberId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAnIncomingNumber(phoneNumberId, _options);
        return result.toPromise();
    }

    /**
     * Dequeue a Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     * @param callId ID if the Call that the Member belongs to
     
     */
    public dequeueAMember(queueId: string, callId: string, _options?: Configuration): Promise<QueueMember> {
        const result = this.api.dequeueAMember(queueId, callId, _options);
        return result.toPromise();
    }

    /**
     * Dequeue Head Member
     
     * @param queueId String that uniquely identifies this queue resource.
     
     */
    public dequeueHeadMember(queueId: string, _options?: Configuration): Promise<QueueMember> {
        const result = this.api.dequeueHeadMember(queueId, _options);
        return result.toPromise();
    }

    /**
     * Download a Recording File
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public downloadARecordingFile(recordingId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadARecordingFile(recordingId, _options);
        return result.toPromise();
    }

    /**
     * Filter Logs
     
     * @param filterLogsRequest Filter logs request paramters
     
     */
    public filterLogs(filterLogsRequest: FilterLogsRequest, _options?: Configuration): Promise<LogList> {
        const result = this.api.filterLogs(filterLogsRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a Call
     
     * @param callId String that uniquely identifies this call resource.
     
     */
    public getACall(callId: string, _options?: Configuration): Promise<CallResult> {
        const result = this.api.getACall(callId, _options);
        return result.toPromise();
    }

    /**
     * Get a Conference
     
     * @param conferenceId A string that uniquely identifies this conference resource.
     
     */
    public getAConference(conferenceId: string, _options?: Configuration): Promise<ConferenceResult> {
        const result = this.api.getAConference(conferenceId, _options);
        return result.toPromise();
    }

    /**
     * Get a Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     * @param callId ID of the Call that the Member belongs to
     
     */
    public getAMember(queueId: string, callId: string, _options?: Configuration): Promise<QueueMember> {
        const result = this.api.getAMember(queueId, callId, _options);
        return result.toPromise();
    }

    /**
     * Get a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param callId ID of the Call associated with this participant.
     
     */
    public getAParticipant(conferenceId: string, callId: string, _options?: Configuration): Promise<ConferenceParticipantResult> {
        const result = this.api.getAParticipant(conferenceId, callId, _options);
        return result.toPromise();
    }

    /**
     * Get a Queue
     
     * @param queueId A string that uniquely identifies this queue resource.
     
     */
    public getAQueue(queueId: string, _options?: Configuration): Promise<QueueResult> {
        const result = this.api.getAQueue(queueId, _options);
        return result.toPromise();
    }

    /**
     * Get a Recording
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public getARecording(recordingId: string, _options?: Configuration): Promise<RecordingResult> {
        const result = this.api.getARecording(recordingId, _options);
        return result.toPromise();
    }

    /**
     * Get an Account
     
     */
    public getAnAccount(_options?: Configuration): Promise<AccountResult> {
        const result = this.api.getAnAccount(_options);
        return result.toPromise();
    }

    /**
     * Get an Application
     
     * @param applicationId A string that uniquely identifies this application resource.
     
     */
    public getAnApplication(applicationId: string, _options?: Configuration): Promise<ApplicationResult> {
        const result = this.api.getAnApplication(applicationId, _options);
        return result.toPromise();
    }

    /**
     * Get an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     
     */
    public getAnIncomingNumber(phoneNumberId: string, _options?: Configuration): Promise<IncomingNumberResult> {
        const result = this.api.getAnIncomingNumber(phoneNumberId, _options);
        return result.toPromise();
    }

    /**
     * Get an SMS Message
     
     * @param messageId String that uniquely identifies this Message resource.
     
     */
    public getAnSmsMessage(messageId: string, _options?: Configuration): Promise<MessageResult> {
        const result = this.api.getAnSmsMessage(messageId, _options);
        return result.toPromise();
    }

    /**
     * Get Head Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     */
    public getHeadMember(queueId: string, _options?: Configuration): Promise<QueueMember> {
        const result = this.api.getHeadMember(queueId, _options);
        return result.toPromise();
    }

    /**
     * List Active Queues
     
     * @param alias Return only the Queue resources with aliases that exactly match this name.
     
     */
    public listActiveQueues(alias?: string, _options?: Configuration): Promise<QueueList> {
        const result = this.api.listActiveQueues(alias, _options);
        return result.toPromise();
    }

    /**
     * List All Account Logs
     
     */
    public listAllAccountLogs(_options?: Configuration): Promise<LogList> {
        const result = this.api.listAllAccountLogs(_options);
        return result.toPromise();
    }

    /**
     * List applications
     
     * @param alias Return only applications with aliases that exactly match this value.
     
     */
    public listApplications(alias?: string, _options?: Configuration): Promise<ApplicationList> {
        const result = this.api.listApplications(alias, _options);
        return result.toPromise();
    }

    /**
     * List available numbers
     
     * @param phoneNumber PCRE-compatible regular expression to filter against &#x60;phoneNumber&#x60; field, which is in E.164 format.
     
     * @param region State or province of this phone number.
     
     * @param country Country of this phone number.
     
     * @param voiceEnabled Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
     
     * @param smsEnabled Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
     
     * @param capabilitiesVoice 
     
     * @param capabilitiesSms 
     
     * @param capabilitiesTollFree 
     
     * @param capabilitiesTenDLC 
     
     * @param capabilitiesShortCode 
     
     */
    public listAvailableNumbers(phoneNumber?: string, region?: string, country?: string, voiceEnabled?: boolean, smsEnabled?: boolean, capabilitiesVoice?: boolean, capabilitiesSms?: boolean, capabilitiesTollFree?: boolean, capabilitiesTenDLC?: boolean, capabilitiesShortCode?: boolean, _options?: Configuration): Promise<AvailableNumberList> {
        const result = this.api.listAvailableNumbers(phoneNumber, region, country, voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode, _options);
        return result.toPromise();
    }

    /**
     * List Call Logs
     
     * @param callId String that uniquely identifies this call resource.
     
     */
    public listCallLogs(callId: string, _options?: Configuration): Promise<LogList> {
        const result = this.api.listCallLogs(callId, _options);
        return result.toPromise();
    }

    /**
     * List Call Recordings
     
     * @param callId String that uniquely identifies this call resource.
     
     * @param dateCreated Only show recordings created on the specified date, in the form *YYYY-MM-DD*.
     
     */
    public listCallRecordings(callId: string, dateCreated?: string, _options?: Configuration): Promise<RecordingList> {
        const result = this.api.listCallRecordings(callId, dateCreated, _options);
        return result.toPromise();
    }

    /**
     * List Calls
     
     * @param active If active is set to true then all calls of the nature queued, ringing, inProgress are returned in the query.
     
     * @param to Only show Calls to this phone number.
     
     * @param _from Only show Calls from this phone number.
     
     * @param status Only show Calls currently in this status. May be &#x60;queued&#x60;, &#x60;ringing&#x60;, &#x60;inProgress&#x60;, &#x60;canceled&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;, &#x60;busy&#x60;, or &#x60;noAnswer&#x60;.
     
     * @param startTime Only show Calls that started at or after this time, given as YYYY-MM-DD hh:mm:ss.
     
     * @param endTime Only show Calls that ended at or before this time, given as YYYY-MM- DD hh:mm:ss.
     
     * @param parentCallId Only show Calls spawned by the call with this ID.
     
     */
    public listCalls(active?: boolean, to?: string, _from?: string, status?: string, startTime?: string, endTime?: string, parentCallId?: string, _options?: Configuration): Promise<CallList> {
        const result = this.api.listCalls(active, to, _from, status, startTime, endTime, parentCallId, _options);
        return result.toPromise();
    }

    /**
     * List Conferences
     
     * @param status Only show conferences that currently have the specified status. Valid values: &#x60;empty&#x60;, &#x60;populated&#x60;, &#x60;inProgress&#x60;, or &#x60;terminated&#x60;.
     
     * @param alias List Conferences whose alias exactly matches this string.
     
     * @param dateCreated Only show Conferences that were created on the specified date, in the form *YYYY-MM-DD*.
     
     * @param dateUpdated Only show Conferences that were last updated on the specified date, in the form *YYYY-MM-DD*.
     
     */
    public listConferences(status?: string, alias?: string, dateCreated?: string, dateUpdated?: string, _options?: Configuration): Promise<ConferenceList> {
        const result = this.api.listConferences(status, alias, dateCreated, dateUpdated, _options);
        return result.toPromise();
    }

    /**
     * List Incoming Numbers
     
     * @param phoneNumber Only show incoming phone number resources that match this PCRE-compatible regular expression.
     
     * @param alias Only show incoming phone numbers with aliases that exactly match this value.
     
     * @param region State or province of this phone number.
     
     * @param country Country of this phone number.
     
     * @param applicationId ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId.
     
     * @param hasApplication Indication of whether the phone number has an application linked to it.
     
     * @param voiceEnabled Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
     
     * @param smsEnabled Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
     
     * @param capabilitiesVoice 
     
     * @param capabilitiesSms 
     
     * @param capabilitiesTollFree 
     
     * @param capabilitiesTenDLC 
     
     * @param capabilitiesShortCode 
     
     * @param offnet Indication of whether the phone number was registered as an offnet number. This field will be rendered only for requests to the IncomingPhone number resource.
     
     */
    public listIncomingNumbers(phoneNumber?: string, alias?: string, region?: string, country?: string, applicationId?: string, hasApplication?: boolean, voiceEnabled?: boolean, smsEnabled?: boolean, capabilitiesVoice?: boolean, capabilitiesSms?: boolean, capabilitiesTollFree?: boolean, capabilitiesTenDLC?: boolean, capabilitiesShortCode?: boolean, offnet?: boolean, _options?: Configuration): Promise<IncomingNumberList> {
        const result = this.api.listIncomingNumbers(phoneNumber, alias, region, country, applicationId, hasApplication, voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode, offnet, _options);
        return result.toPromise();
    }

    /**
     * List Members
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     */
    public listMembers(queueId: string, _options?: Configuration): Promise<QueueMemberList> {
        const result = this.api.listMembers(queueId, _options);
        return result.toPromise();
    }

    /**
     * List Participants
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param talk Only show Participants with the talk privilege.
     
     * @param listen Only show Participants with the listen privilege.
     
     */
    public listParticipants(conferenceId: string, talk?: boolean, listen?: boolean, _options?: Configuration): Promise<ConferenceParticipantList> {
        const result = this.api.listParticipants(conferenceId, talk, listen, _options);
        return result.toPromise();
    }

    /**
     * List Recordings
     
     * @param callId Show only Recordings made during the Call with this ID.
     
     * @param conferenceId Show only Recordings made during the conference with this ID.
     
     * @param dateCreated Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
     
     */
    public listRecordings(callId?: string, conferenceId?: string, dateCreated?: string, _options?: Configuration): Promise<RecordingList> {
        const result = this.api.listRecordings(callId, conferenceId, dateCreated, _options);
        return result.toPromise();
    }

    /**
     * List SMS Messages
     
     * @param to Only show Messages to this phone number.
     
     * @param _from Only show Messages from this phone number.
     
     * @param beginTime Only show Messages sent at or after this time (GMT), given as *YYYY-MM-DD hh:mm:ss*.
     
     * @param endTime Only show messages sent at or before this time (GMT), given as *YYYY-MM-DD hh:mm*..
     
     * @param direction Either &#x60;inbound&#x60; or &#x60;outbound&#x60;. Only show Messages that were either *sent from* or *received by* FreeClimb.
     
     */
    public listSmsMessages(to?: string, _from?: string, beginTime?: string, endTime?: string, direction?: 'inbound' | 'outbound', _options?: Configuration): Promise<MessagesList> {
        const result = this.api.listSmsMessages(to, _from, beginTime, endTime, direction, _options);
        return result.toPromise();
    }

    /**
     * Make a Call
     
     * @param makeCallRequest Call details for making a call
     
     */
    public makeACall(makeCallRequest?: MakeCallRequest, _options?: Configuration): Promise<CallResult> {
        const result = this.api.makeACall(makeCallRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param callId ID of the Call associated with this participant.
     
     */
    public removeAParticipant(conferenceId: string, callId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeAParticipant(conferenceId, callId, _options);
        return result.toPromise();
    }

    /**
     * Send an SMS Message
     
     * @param messageRequest Details to create a message
     
     */
    public sendAnSmsMessage(messageRequest: MessageRequest, _options?: Configuration): Promise<MessageResult> {
        const result = this.api.sendAnSmsMessage(messageRequest, _options);
        return result.toPromise();
    }

    /**
     * Stream a Recording File
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public streamARecordingFile(recordingId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.streamARecordingFile(recordingId, _options);
        return result.toPromise();
    }

    /**
     * Update a Conference
     
     * @param conferenceId String that uniquely identifies this conference resource.
     
     * @param updateConferenceRequest Conference Details to update
     
     */
    public updateAConference(conferenceId: string, updateConferenceRequest?: UpdateConferenceRequest, _options?: Configuration): Promise<ConferenceResult> {
        const result = this.api.updateAConference(conferenceId, updateConferenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a Live Call
     
     * @param callId String that uniquely identifies this call resource.
     
     * @param updateCallRequest Call details to update
     
     */
    public updateALiveCall(callId: string, updateCallRequest: UpdateCallRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateALiveCall(callId, updateCallRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param callId ID of the Call associated with this participant.
     
     * @param updateConferenceParticipantRequest Conference participant details to update
     
     */
    public updateAParticipant(conferenceId: string, callId: string, updateConferenceParticipantRequest?: UpdateConferenceParticipantRequest, _options?: Configuration): Promise<ConferenceParticipantResult> {
        const result = this.api.updateAParticipant(conferenceId, callId, updateConferenceParticipantRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a Queue
     
     * @param queueId A string that uniquely identifies this Queue resource.
     
     * @param queueRequest Queue Details to update
     
     */
    public updateAQueue(queueId: string, queueRequest?: QueueRequest, _options?: Configuration): Promise<QueueResult> {
        const result = this.api.updateAQueue(queueId, queueRequest, _options);
        return result.toPromise();
    }

    /**
     * Manage an account
     
     * @param accountRequest Account details to update
     
     */
    public updateAnAccount(accountRequest?: AccountRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateAnAccount(accountRequest, _options);
        return result.toPromise();
    }

    /**
     * Update an application
     
     * @param applicationId A string that uniquely identifies this application resource.
     
     * @param applicationRequest Application details to update.
     
     */
    public updateAnApplication(applicationId: string, applicationRequest?: ApplicationRequest, _options?: Configuration): Promise<ApplicationResult> {
        const result = this.api.updateAnApplication(applicationId, applicationRequest, _options);
        return result.toPromise();
    }

    /**
     * Update an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     
     * @param incomingNumberRequest Incoming Number details to update
     
     */
    public updateAnIncomingNumber(phoneNumberId: string, incomingNumberRequest?: IncomingNumberRequest, _options?: Configuration): Promise<IncomingNumberResult> {
        const result = this.api.updateAnIncomingNumber(phoneNumberId, incomingNumberRequest, _options);
        return result.toPromise();
    }


}



