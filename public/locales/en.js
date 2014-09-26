var ezLanguages = ezLanguages || {};

ezLanguages['en'] = {
  // Social links
  "social+facebook":   "Follow us on Facebook",
  "social+twitter":    "Follow us on Twitter",
  "social+googleplus": "Follow us on Google+",
  "social+mail":       "Contact us at {{ mail }}",

  // login page
  "login+signin":                  "Sign in",
  "login+signup":                  "Sign up",
  "login+checking_users":          "Checking users...",
  "login+install_successful":      "Install successful !",
  "login+set_admin_account":       "Sign up now to set administrator account.",
  "login+register_quick_and_easy": "Sign up before processing your logs, it's quick and easy.<br/>Then you'll be able to track your jobs and communicate more easily with the ezPAARSE team.",
  "login+ezpaarse_is":             "ezPAARSE, it's...",
  "login+ezpaarse_description":    "an <a href=\"{{ github }}\">open-source software</a> that can ingest and analyse your (proxy) log files and show how users access suscribed electronic ressources. It filters, extracts and enriches the consultation events that were spotted and produces a CSV file following COUNTER codes of practice.",
  "login+simple_tool":             "A simple and effective tool",
  "login+few_clic_enough":         "A few clicks are enough to install it and start analyzing your logs.",
  "login+responsive_team":         "A highly available and responsive team",
  "login+problem_question":        "Problem, question, suggestion ?",
  "login+interested":              "We're interested !",
  "login+growing_community":       "A growing community",
  "login+not_only_fr":             "Not only French-speaking !",
  "login+connecting":              "Connecting...",
  "login+error":                   "Error",
  "login+identifier":              "Identifier",
  "login+email":                   "Email address",
  "login+password":                "Password",
  "login+confirm":                 "Confirm your password",
  "login+rememberme":              "Remember me",
  "login+cancel":                  "Cancel",
  "login+submitting":              "Submitting...",
  "login+inform_team_warning":     "You just installed ezPAARSE and you're going to create the administrator account. With your agreement, we would like to be informed about this installation. The e-mail address filled above and the version of ezPAARSE you installed will be sent to <strong>{{ recipients }}</strong>.",
  "login+inform_team":             "Inform the team",

  // Slides on the login page
  "slider+raw_material":      "The raw material: your logs",
  "slider+use_this_way":      "Which can be used this way !",
  "slider+drag_drop":         "Drag and drop your files to process them",
  "slider+real_time_process": "Your logs are processed in real time",
  "slider+progress":          "You're informed about the progress",
  "slider+click_to_dl":       "Just click to download the result",
  "slider+many_informations": "The result contains many informations",
  "slider+many_platforms":    "Many editor platforms are handlded by ezPAARSE.",
  "slider+renders":           "LibreOffice and Excel renders are available for graphically displaying the results",
  "slider+render_example":    "LibreOffice rendering example : succssful accesses per title",

  // Layout
  "menu+admin":         "Administration",
  "menu+logout":        "Logout",
  "menu+process_logs":  "Process your logs",
  "menu+documentation": "Documentation",
  "footer+powered":     "Powered by <a href=\"{{ nodejs }}\" target=\"_blank\">Node.js</a> and <a href=\"{{ expressjs }}\" target=\"_blank\">Express 3</a>",

  // Process state button
  "state+idle":         "No process loading",
  "state+loading":      "Ongoing process... {{ percent }}%",
  "state+finalisation": "Finalisation...",
  "state+success":      "Process successful",
  "state+error":        "Error, process aborted",
  "state+aborted":      "Process cancelled",

  // Form page
  "form+title":             "Prepare the data to be processed",
  "form+description":       "Select the logfiles you wish to process. Your logfiles may need setting some parameters to be properly analysed with ezPAARSE. If you need help, you can <a ez-toggle-sidebar=\"{{ sidebarID }}\">contact the ezPAARSE team</a>.",
  "form+settings":          "Parameters",
  "form+logfiles":          "Logfiles",
  "form+copy_paste":        "Copy/Paste logs",
  "form+autosort":          "autosort",
  "form+clear_files":       "Clear files",
  "form+drop_files_here":   "Drag and drop your files here",
  "form+click_to_add":      "Click to add",
  "form+filename":          "Filename",
  "form+size":              "Size",
  "form+n_selected_files":  "{{ number }} selected files",
  "form+total_size":        "{{ size | bytesToSize }} (total)",
  "form+process_files":     "Process the files",
  "form+process_with_curl": "Process with cURL",
  "form+paste_your_logs":   "Copy/paste your log lines here",
  "form+process_lines":     "Process the lines",
  "form+curl_instructions": "Copy the following command to run the query with cURL using the current setting of the form. You may need to change the file path or add options like <code>--proxy</code> or <code>--no-buffer</code>.",

  // Settings tab
  "settings+parameters":           "Current parameters",
  "settings+loading_predefined":   "Load a predefined set of parameters",
  "settings+modified":             "modified",
  "settings+predefined_choice":    "Chose a predefined set of parameters...",
  "settings+no_result_for":        "No result for",
  "settings+default":              "default",
  "settings+input":                "Input",
  "settings+output":               "Output",
  "settings+date_format":          "Date format",
  "settings+date_format_help":     "Date format of the log lines.",
  "settings+relative_domain":      "Relative domaine",
  "settings+relative_domain_help": "Set a relative domain for the truncated URLs.",
  "settings+log_type":             "Log type",
  "settings+auto_recognition":     "Auto recognition",
  "settings+log_type_help":        "Plateform from which the logs come from",
  "settings+log_format":           "Log format",
  "settings+log_format_help":      "Log format (Eg: '%h %l %u %t %s %b'). <a href='{{ docURL }}' target='_blank'>Learn more</a>",
  "settings+result_format":        "Result format",
  "settings+result_format_help":   "Format for the resulting data",
  "settings+system_traces":        "System traces",
  "settings+system_traces_help":   "Verbosity level for the traces left duribg the processing.",
  "settings+output_fields":        "Output fields",
  "settings+output_fields_add":    "Add...",
  "settings+output_fields_remove": "Remove...",
  "settings+output_fields_help":   "Fields (headers) to add/remove from the result file.",
  "settings+notifications":        "Notifications",
  "settings+notification_mails":   "Mail address(es)",
  "settings+notifications_help":   "List of comma-separated email addresses that will get a notification at the end of the process.",
  "settings+counter_reports":      "COUNTER reports",
  "settings+new":                  "New",
  "settings+headers":              "Headers (advanced)",
  "settings+headers_help":         "Headers list to add to the request. If a header duplicates an option in the form, the option is overwritten.",
  "settings+remember":             "Remember my parameters",
  "settings+reset":                "Reset parameters",
  "settings+name":                 "Name",
  "settings+value":                "Value",

  // Feedback
  "feedback+title":             "Feedback",
  "feedback+subtitle":          "Your opinion matters !",
  "feedback+recipients":        "Your feedback will be sent to <strong>{{ recipients }}</strong>. A copy will be forwarded to the address indicated below.",
  "feedback+address":           "Your adress",
  "feedback+email":             "E-Mail",
  "feedback+comment":           "Your comment",
  "feedback+what_do_you_think": "What do you think about ezPAARSE?",
  "feedback+send":              "Send",
  "feedback+sent":              "Feedback sent",
  "feedback+thanks":            "Thank you !",
  "feedback+no":                "No",
  "feedback+report":            "Report from the {{ date | date:\"yyyy-MM-dd 'at' hh:mm a\" }}",
  "feedback+send_report":       "Send a process report",
  "feedback+send_browser":      "Send my browser",
  "feedback+checking_server":   "Checking feedback server",
  "feedback+error":             "An error occured, please try again",


  // Process page
  "process+title":              "Processing",
  "process+description":        "Your logs are being processed by ezPAARSE. You can follow the processing and the different reject types in realtime",
  "process+description_done":   "ezPAARSE has finished processing your logs. <a href='https://github.com/ezpaarse-project/ezpaarse/raw/master/misc/windows/ezPAARSE-Render.xltm'>Excel</a> and <a href='https://github.com/ezpaarse-project/ezpaarse/raw/master/misc/windows/ezPAARSE-Render.ots'>LibreOffice</a> macros are available if you want to get a first glimpse of the results.",
  "process+finalisation":       "Finalisation...",
  "process+done":               "Done",
  "process+error":              "Error",
  "process+cancelled":          "Canceled",
  "process+download":           "Download the result",
  "process+can_start_download": "You can already start downloading the results",
  "process+cancel":             "Abort",
  "process+new":                "New process",
  "process+state":              "Process state",
  "process+rejects":            "Rejects",
  "process+system_traces":      "System traces",
  "process+report":             "Report",

  // Process page -> metrics tab
  "metrics+read_lines":      "Read lines",
  "metrics+generated_ecs":   "Generated <popup data-variation=\"inverted\" data-content=\"Consultation events\">CEs</popup>",
  "metrics+duration":        "Processing lasted",
  "metrics+speed":           "Speed",
  "metrics+platforms_count": "Recognized platforms count",
  "metrics+html_count":      "HTML accesses",
  "metrics+pdf_count":       "PDF accesses",

  // Process page -> rejects tab
  "rejects+ignored_lines":         "Ignored Lines",
  "rejects+denied_ecs":            "Denied access CEs",
  "rejects+duplicates":            "Duplicates",
  "rejects+chrono_anomalies":      "Chronological anomalies",
  "rejects+ignored_domains":       "Ignored domains",
  "rejects+unknown_domains":       "Unknown domains",
  "rejects+unknown_formats":       "Unknown formats",
  "rejects+unqualified_ecs":       "Unqualified CEs",
  "rejects+missing_pkbs":          "Missing PKBs",
  "rejects+relevant_lines":        "Relevant log lines read: {{ nb | localNumber }}",
  "rejects+ignored_lines_help":    "Number of non relevant requests. They are mainly downloaded images, css or web scripts that are not directly related to a resource. In a raw log, this figure is often high.",
  "rejects+denied_ecs_help":       "List of accesses that were denied to the user when a click was performed.<br/>Example: a user tried to access a resource that is not included in the package negociated by its instituion.",
  "rejects+duplicates_help":       "Number of ignored accesses because identified as double-clicks",
  "rejects+chrono_anomalies_help": "Lines that were ignored because they are not chronologically ordered in the log file.",
  "rejects+ignored_domains_help":  "The ignored domains.",
  "rejects+unknown_domains_help":  "The unknown domains.",
  "rejects+unknown_formats_help":  "The unknown formats",
  "rejects+unqualified_ecs_help":  "The parsers were not able to recognize bibliographical data in the URLs of those loglines. They are thus ignored by ezPAARSE.",
  "rejects+missing_pkbs_help":     "The missing PKBs.",

  // Report (tab and fullpage)
  "report+title":          "Processing report",
  "report+subtitle":       "Generated on {{ date | date:\"dd-MM-yyyy 'at' HH:mm\" }}",
  "report+view_full_page": "View the report in full screen",
  "report+general":        "General",
  "report+rejets":         "Rejects",
  "report+dedoublonnage":  "Duplicates",
  "report+stats":          "Statistics",
  "report+files":          "Files",
  "report+first_event":    "First consultation",
  "report+system_traces":  "System traces",
  "report+alerts":         "Alerts",
  "report+notifications":  "Notifications",
  "report+loading":        "Loading...",
  "report+goto":           "Go to :",
  "report+report_fail":    "Failed to retrieve the report...",
  "report+fail_cause_1":   "Have you specified an identifier?",
  "report+fail_cause_2":   "Is the associated process recent?",
  "report+traces_fail":    "Failed to retrieve the traces",

  // Admin page
  "admin+title":                   "Administration",
  "admin+unknown_state":           "Unknwon state",
  "admin+updates_available":       "Updates available",
  "admin+updates":                 "Updates",
  "admin+update":                  "Update",
  "admin+updating":                "Updating...",
  "admin+software":                "Software",
  "admin+current_version":         "Current version",
  "admin+stable_version":          "Latest stable version",
  "admin+beta_version":            "Latest beta version",
  "admin+update_to_x":             "Update to {{ version }}",
  "admin+ezpaarse_is_uptodate":    "ezPAARSE is up-to-date",
  "admin+platforms_are_uptodate":  "Platforms are up-to-date",
  "admin+migrate_to_beta":         "Migrate to the beta version",
  "admin+back_to_stable":          "Get back to stable version",
  "admin+error":                   "Error",
  "admin+system":                  "System",
  "admin+platforms":               "Platforms",
  "admin+uptodate":                "up-to-date",
  "admin+upward":                  "newer",
  "admin+users":                   "Users",
  "admin+get_users_fail":          "The users could not be retrieved.",
  "admin+get_platforms_fail":      "The list of the platforms could not be retrieved.",
  "admin+get_outdated_fail":       "Outdated platforms could not be identified.",
  "admin+new_platforms_available": "New platforms are available",
  "admin+platform":                "Platform",
  "admin+status":                  "Status",
  "admin+version":                 "Version",
  "admin+analysis":                "analyzis",
  "admin+name":                    "Name",
  "admin+group":                   "Group",
  "admin+remove":                  "Remove",
  "admin+password":                "Password",
  "admin+attention":                  "Attention",
  "admin+soft_local_changes":         "It seems that local changes have been applied to the software. In that case, future updates might fail.",
  "admin+soft_upward_stable":         "The current version of the software has got changes that are more recent than the latest stable release. Click the button above if you wish to get back to the latest stable release.",
  "admin+platforms_local_changes":    "It seems that local changes have been applied to the platforms directory. In that case, future updates might fail.",
  "admin+contact_deployment_service": "In case of problems, we invite you to contact the deployer.",
  "admin+updating_software":          "ezPAARSE is being updated. This operation can take up to several minutes, please wait...",
  "admin+elapsed_time":               "Elapsed time",
  "admin+long_update":                "This update seems to take a lot of time, ezPAARSE might have failed to be restarded."
};
