declare global {
    interface Window {
        CLIENTTOKEN?: string;
        CLIENTIDENTITY?: string;
        __DEV__?: boolean;
    }
}

export type appointmentType = 'SCHEDULED' | 'SCHEDULED_AUDIO' | 'SCHEDULED_VIDEO' | 'REGULAR_DROP' | 'SURGERY_DROP' | 'WALKIN' | 'CALL_BACKS' | 'BREAK' | 'LUNCH' | 'SURGERY';
export type Species = 'Dog' | 'Cat';
export type optionType = 0 | 1 | 2 | 3;
export type iso = string;
export type Partial<T> = {
    [P in keyof T]?: T[P];
}
