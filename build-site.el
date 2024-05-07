;; Site builder using org

;; Setup package

(require 'package)
(setq package-user-dir (expand-file-name "./.packages"))
(setq package-archives '(("melpa" . "https://melpa.org/packages/")
			 ("elpa"  . "https://elpa.gnu.org/packages/")))

;; initialize package
(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))

;; install dependencies
(package-install 'htmlize)











;; Load the publishing system
(require 'ox-publish)

(setq org-html-validation-link nil
      org-html-head-include-scripts nil                      ;; turn off default script
      org-html-head-include-default-style nil                ;; turn off default css
      org-html-head "<link rel=\"stylesheet\" href=\"./assets/style.css\" />")   ;; use personal css

;; Define project
(setq org-publish-project-alist
      (list
       (list "website"
	     :recursive t
	     :base-directory "./content"
	     :publishing-directory "./public"
	     :publishing-function 'org-html-publish-to-html
	     :with-author t
	     :with-creator nil
	     :with-toc t
	     :section-numbers nil
	     :time-stamp-file t)))

;; Generate site output
(org-publish-all t)


(message "Build complete!")
