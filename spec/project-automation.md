# Project automation

`config.projectAutomation` chooses CONTACTS, MILESTONES, DELIVERABLES or NONE. Explicit choices take precedence. NONE suppresses linking. Omission enables conservative shared detection based on the field key, label and valid headers. Ambiguous contact/milestone/deliverable tables require an explicit mapping.

CONTACTS requires Name. Use person-based tables with Email and Role. MILESTONES requires a title such as Milestone or Name and Due Date, Target Date or a planned-date header. DELIVERABLES uses Deliverable or Name and a due/planned date. Information Exchange tables and established NIBS keys are recognized where their headers match.

The Builder displays detections and lets authors confirm or change the purpose. Explicit mappings with missing required headers fail validation. Runtime mapping also rejects unusable explicit mappings.

Only an authorized active Project BEP supplies shared coordination data. RFP and Proposal tables remain isolated. Row identity carries through reordering and deletion so a surviving source row keeps its own reminder, submitted CDE link and review metadata. Removed rows are retired through the existing source-removed timestamp.
