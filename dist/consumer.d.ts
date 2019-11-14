import * as SQS from 'aws-sdk/clients/sqs';
import { EventEmitter } from 'events';
declare type SQSMessage = SQS.Types.Message;
export interface ConsumerOptions {
    queueUrl?: string;
    attributeNames?: string[];
    messageAttributeNames?: string[];
    stopped?: boolean;
    batchSize?: number;
    visibilityTimeout?: number;
    waitTimeSeconds?: number;
    authenticationErrorTimeout?: number;
    pollingWaitTimeMs?: number;
    terminateVisibilityTimeout?: boolean;
    sqs?: SQS;
    region?: string;
    handleMessageTimeout?: number;
    handleMessage?(message: SQSMessage): Promise<void>;
    handleMessageBatch?(messages: SQSMessage[]): Promise<void>;
    pollingStartedInstrumentCallback?(eventData: object): void;
    pollingFinishedInstrumentCallback?(eventData: object): void;
}
export declare class Consumer extends EventEmitter {
    private queueUrl;
    private handleMessage;
    private handleMessageBatch;
    private pollingStartedInstrumentCallback?;
    private pollingFinishedInstrumentCallback?;
    private handleMessageTimeout;
    private attributeNames;
    private messageAttributeNames;
    private stopped;
    private batchSize;
    private visibilityTimeout;
    private waitTimeSeconds;
    private authenticationErrorTimeout;
    private pollingWaitTimeMs;
    private terminateVisibilityTimeout;
    private sqs;
    constructor(options: ConsumerOptions);
    readonly isRunning: boolean;
    static create(options: ConsumerOptions): Consumer;
    start(): void;
    stop(): void;
    private handleSqsResponse;
    private processMessage;
    private receiveMessage;
    private deleteMessage;
    private executeHandler;
    private terminateVisabilityTimeout;
    private emitError;
    private poll;
    private processMessageBatch;
    private deleteMessageBatch;
    private executeBatchHandler;
    private terminateVisabilityTimeoutBatch;
}
export {};
