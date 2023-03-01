export enum fields {
    EXPERTISES_LIST = 'EXPERTISES_LIST',
    EXPERTISE = 'EXPERTISE',
    SEARCH_QUERY = 'SEARCH_QUERY',
    CURRENT_PAGE = 'CURRENT_PAGE',
    ALL_COUNT = 'ALL_COUNT',
    SORTING = 'SORTING',
    SORTING_FIELD = 'SORTING_FIELD',
    SORTING_MODE = 'SORTING_MODE',
    IS_OPEN_ADD_EXPERT_MODAL = 'IS_OPEN_ADD_EXPERT_MODAL',
    SELECTED_STATUS = 'SELECTED_STATUS',
    SELECTED_QUALIFICATION = 'SELECTED_QUALIFICATION',
    COMMENTS = 'COMMENTS',
    USER_STATUS_IN_EX = "user_status_in_expertise",
}

export enum userStatusesInExFields {
   EX_MASTER = "expertise_master",
   EX_MEMBER = "expertise_member",
   STRUCTURAL_LEADER = "structural_leader",
}

export enum fetchingTypes {
    GET_EXPERTISES = 'GET_EXPERTISES',
    GET_EXPERTISE = 'GET_EXPERTISE',
    ADD_EXPERT_TO_EXPERTISE = 'ADD_EXPERT_TO_EXPERTISE',
    REMOVE_EXPERT_FROM_EXPERTISE = 'REMOVE_EXPERT_FROM_EXPERTISE',
    APPROVE_EXPERTISE = 'APPROVE_EXPERTISE',
    SEND_WP_FOR_REWORK = 'SEND_WP_FOR_REWORK',
    GET_COMMENTS = 'GET_COMMENTS',
    CREATE_COMMENT = 'CREATE_COMMENT',
}

export enum UserExpertResultEnum {
    APPROVED = 'AP',
    REWORK = 'RE',
}

export const UserExpertResult = {
    [UserExpertResultEnum.APPROVED]: 'Одобрено',
    [UserExpertResultEnum.REWORK]: 'Отправлено на доработку',
}

export enum ExpertisesFields {
    ID = 'id',
    APPROVAL_DATE = 'approval_date',
    DATE_OF_LAST_CHANGE = 'date_of_last_change',
    STATUS = 'expertise_status',
    EXPERTS = 'experts',
    EXPERT = 'expert',
    EXPERTS_USERS_IN_RPD = 'expertse_users_in_rpd',
    WORK_PROGRAM = 'work_program',
    PRACTICE = 'practice',
    GIA = 'gia',
    EXPERT_RESULT = 'expert_result',
    USER_EXPERTISE_STATUS = 'user_expertise_status',
    EXPERTISE_TYPE = 'expertise_type',
}


export enum CommentFields {
    DATE = 'comment_date',
    TEXT = 'comment_text',
    ID = 'id',
    USER_EXPERTISE = 'user_expertise',
    EXPERT = 'expert',
}