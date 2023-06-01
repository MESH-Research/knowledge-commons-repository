"""
kcr:user_defined_tags       Free user-defined tags associated with the current
                            item. This value is an array of objects, each with
                            the keys "tag_label" and "tag_identifier". The
                            tag_identifier is an integer assigned automatically. The tag_label is the string entered
                            by the user.
"""


from invenio_i18n import lazy_gettext as _
from invenio_records_resources.services.custom_fields import (
    BaseListCF,
    TextCF,
    IntegerCF
)
from marshmallow import fields, Schema, validate
from marshmallow_utils.fields import (
    SanitizedUnicode,
    SanitizedHTML,
    StrippedHTML
)
from .kcr_metadata_fields import KCR_NAMESPACE


class UserTagsCF(BaseListCF):
    """Nested custom field."""

    def __init__(self, name, **kwargs):
        """Constructor."""
        super().__init__(
            name,
            field_cls=SanitizedUnicode(),
            field_args={
            },
            multiple=True,
            **kwargs
        )

    # @property
    # def field(self):
    #     """Notes fields definitions."""
    #     return fields.Nested(
    #         {
    #         "tag_label": SanitizedUnicode(),
    #         "tag_identifier": IntegerCF()
    #         }
    #     )

    @property
    def mapping(self):
        """user_defined_tags search mappings."""
        return {
            "type": "keyword",
            "properties": {
                    # "properties": {
                    #     "tag_label": {"type": "text"},
                    #     "tag_identifier": {"type": "text"}
                    # }
            }
        }


KCR_USER_TAGS_FIELDS = [
    TextCF(name="kcr:user_defined_tags",
           field_cls=SanitizedUnicode,
           multiple=True)
]


KCR_USER_TAGS_SECTION_UI = {
    "section": _("Tags"),
    "fields": [
        {
            "field": "kcr:user_defined_tags",
            "ui_widget": "MultiInput",
            # "template": "knowledge_commons_repository/user_defined_tags.html",
            "props": {
                "label": _("Tags"),
                "placeholder": _("Enter your tags here"),
                "icon": "tags",
                "description": "Tags for this deposit that do not appear in the subject terms.",
            },
        }
    ],
}
