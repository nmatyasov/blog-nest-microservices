export enum RMQCommand {
  POST_CREATED = 'post_created',
  POST_UPDATED = 'post_updated',
  FEED_ADDED = 'feed_added',
  POST_DELETED = 'post_deleted',
  POST_PUBLISHED = 'post_published',
  GET_ALL_FEEDS_BY_POST = 'get_all_feeds_by_post',
  VALIDATE_USER = 'validate_user',
  USER_ADDED = 'user_added',
  PROFILE_UPDATE = 'profile_update',
  REL_POST_PROFILE = 'set_relation_post_profile',
  REL_FEED_PROFILE = 'set_relation_feed_profile',
  POST_PROFILE_REL_DELETED = 'delete_relation_post_profile',
  FEED_PROFILE_REL_DELETED = 'delete_relation_feed_profile',
  POST_FEED_REL_DELETED = 'delete_relation_post_feed',
  GET_PROFILE_CARD = 'get_profile_card',
  GET_PROFILE_ACTIVITY = 'get_profile_activity',
  GET_POST = 'get_post',
  SEND_FEED_ADDED = 'send_alert_author_about_feedback',
}
