export enum DataStorage_Request {
    READ_MANY = "READ_MANY",
    READ_ONE = "READ_ONE",
    READ_COUNT = "READ_COUNT",
    READ_MAX = "READ_MAX",
    READ_SUM = "READ_SUM",
    READ_MIN = "READ_MIN",
    READ_AVERAGE = "READ_AVERAGE",
    CREATE = "CREATE",
    UPDATE_ONE = "UPDATE_ONE",
    FIND_ONE_AND_UPDATE = "FIND_ONE_AND_UPDATE",
    FIND_ONE_AND_UPDATE_COUNTER = "FIND_ONE_AND_UPDATE_COUNTER",
    REMOVE = "REMOVE"
}

export enum SocialMedia_Request {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    VERIFY_CREDENTIALS = "VERIFY_CREDENTIALS",
    READ_POST_INSIGHTS = "READ_POST_INSIGHTS",
    CREATE_POST = "CREATE_POST",
    READ_RELATIONSHIP = "READ_RELATIONSHIP"
}