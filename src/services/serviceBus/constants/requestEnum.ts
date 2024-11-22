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
    UPDATE_MANY = "UPDATE_MANY",
    FIND_ONE_AND_UPDATE = "FIND_ONE_AND_UPDATE",
    FIND_ONE_AND_UPDATE_COUNTER = "FIND_ONE_AND_UPDATE_COUNTER",
    UPDATE_ONE_OR_CREATE = "UPDATE_ONE_OR_CREATE",
    REMOVE = "REMOVE",
    REMOVE_BY_FILTER = "REMOVE_BY_FILTER",
    ADD_ITEMS_TO_ARRAYS = "ADD_ITEMS_TO_ARRAYS",
    REMOVE_ITEMS_FROM_ARRAYS = "REMOVE_ITEMS_FROM_ARRAYS",
    UPDATE_CAMPAIGNS_TO_PERSON = "UPDATE_CAMPAIGNS_TO_PERSON",
    UPDATE_PERSON_WALLET = "UPDATE_PERSON_WALLET",
    CALCULATE_CAMPAIGNS_OF_PERSON = "CALCULATE_CAMPAIGNS_OF_PERSON",
    UPDATE_PERSON_SCOPE_OF_CAMPAIGN = "UPDATE_PERSON_SCOPE_OF_CAMPAIGN",
    CALCULATE_PERSON_SCOPE_OF_CAMPAIGN = "CALCULATE_PERSON_SCOPE_OF_CAMPAIGN",
}

export enum SocialMedia_Request {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    VERIFY_CREDENTIALS = "VERIFY_CREDENTIALS",
    READ_POST_INSIGHTS = "READ_POST_INSIGHTS",
    CREATE_POST = "CREATE_POST",
    READ_RELATIONSHIP = "READ_RELATIONSHIP"
}