import React, { FC } from 'react';
import { TabSection, TabSubTitle, TabText, TabWrapper } from './styles';

type TermsProps = {
	isActive: boolean;
};

const Terms: FC<TermsProps> = ({ isActive }) => {
	return (
		<TabWrapper isActive={isActive}>
			<TabSection>
				<TabText>
					These terms and conditions ("Terms", "Agreement") are an agreement between Digital Services SG Six
					Pte. Ltd. ("Digital Services SG Six Pte. Ltd.", "us", "we" or "our"), a company incorporated in
					Singapore, and you ("User", "you" or "your"). This Agreement sets forth the general terms and
					conditions of your use of the Tinvio mobile application, Tinvio web application and any of its
					products or services (collectively, "Transactions Platform" or "Services" or "Tinvio").
				</TabText>
				<TabText>
					PLEASE READ THESE TERMS CAREFULLY. By accessing, installing, downloading and/or using the
					Transactions Platform or the Services, you acknowledge that you have read and understood and agree
					to be bound by these Terms (including all agreements and policies referenced in these Terms or
					otherwise applicable to the use of any third party services, the Virtual Wallet (as defined below)
					and related services which are required to be agreed to and accepted before the use of such specific
					features) and to our Privacy Policy. If you do not agree to be bound by any of these Terms, you must
					immediately stop using the Transactions Platform and/or any Services provided therein, close your
					account in Tinvio, delete the Transactions Platform from your mobile devices and/or other computer
					equipment and terminate your relationship with us without cost or penalty. These Terms apply in
					addition to and do not derogate from any other terms or conditions that expressly apply to a
					specific product or service accessed, supplied or provided by or via the Transactions Platform.
				</TabText>
				<TabText>
					We reserve the right to amend, vary or change any information in the Transactions Platform and in
					these Terms without notice. The amended Terms will take effect from the time of posting on the
					Transactions Platform or our website. You are responsible for regularly reviewing these Terms so
					that you are aware of any changes to them and you will be bound by the amended Terms if you continue
					to access or use the Transactions Platform and/or Services.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Accounts and membership</TabSubTitle>
				<TabText>
					If you create an account in Tinvio, you are responsible for maintaining the security of your account
					and you are fully responsible for all activities, including but not limited to communication,
					ordering, invoicing, analytics, that occur under the account and any other actions taken in
					connection with it. We may monitor and review new accounts before you may sign in and use our
					Services. Providing false contact information of any kind may result in the termination of your
					account. You must immediately notify us of any unauthorized uses of your account or any other
					breaches of security. We will not be liable for any acts or omissions by you, including any damages
					of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your
					account (or any part thereof) if we determine that you have violated any provision of this Agreement
					or that your conduct or content would tend to damage our reputation and goodwill. If we delete your
					account for the foregoing reasons, you may not re-register for our Services. We may block your
					mobile number, email address and Internet protocol address to prevent further registration.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>User content</TabSubTitle>
				<TabText>
					We do not own any data, information or material ("Content") that you submit in Tinvio in the course
					of using the Services. You shall have sole responsibility for the accuracy, quality, integrity,
					legality, reliability, appropriateness, and intellectual property ownership or right to use of all
					submitted Content. We may monitor and review Content in Tinvio submitted or created using our
					Services by you. Unless specifically permitted by you, your use of Tinvio does not grant us the
					license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored
					in your user account for commercial, marketing or any similar purpose. But you grant us permission
					to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user
					account solely as required for the purpose of providing the Services to you. Without limiting any of
					those representations or warranties, we have the right, though not the obligation, to, in our own
					sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our
					policies or is in any way harmful or objectionable.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Billing and payments</TabSubTitle>
				<TabText>
					Tinvio is free to use. Where future Services are offered on a free trial basis, payment may be
					required after the free trial period ends. If auto-renewal is enabled for the Services you have
					subscribed for, you will be charged automatically after each billing cycle in accordance with the
					subscription term you selected based on the billing details which you provided to us.
				</TabText>
				<TabText>
					We are responsible for paying to the relevant Third Party PSPs (as defined below) such fees and
					charges for your use of third party payment services (“PSP Fees”). We may however from time to time
					require you to pay to us such proportion of the PSP Fees as we deem fit and reasonable in our sole
					discretion for your use of such third party payment services per transaction order. In the event
					that you will be charged for any part of the PSP Fees, we will notify you of such additional charges
					before your next billing cycle.
				</TabText>
				<TabText>
					If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to
					provide us with a copy of your valid government-issued photo identification, and possibly a copy of
					a recent bank statement for the credit or debit card used for the purchase. We reserve the right to
					change products and product pricing at any time. We also reserve the right to refuse any order you
					place with us. We may, in our sole discretion, limit or cancel quantities purchased per user, per
					outlet, per merchant, or per order. These restrictions may include orders placed by or under the
					same customer account, the same credit card, and/or orders that use the same billing and/or shipping
					address. In the event that we make a change to or cancel an order, we may attempt to notify you by
					contacting the e-mail and/or billing address/phone number provided at the time the order was made.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Accuracy of information</TabSubTitle>
				<TabText>
					Occasionally there may be information in Tinvio that contains typographical errors, inaccuracies or
					omissions that may relate to product descriptions, pricing, availability, promotions and offers. We
					reserve the right to correct any errors, inaccuracies or omissions, and to change or update
					information or cancel orders if any information in Tinvio or on any related Services is inaccurate
					at any time without prior notice (including after you have submitted your order). We undertake no
					obligation to update, amend or clarify information in Tinvio including, without limitation, pricing
					information, except as required by law. No specified update or refresh date applied in Tinvio should
					be taken to indicate that all information in Tinvio or on any related Services has been modified or
					updated.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Third party payment services</TabSubTitle>
				<TabText>
					If you decide to enable, access or use third party payment services, including but not limited to
					the services of third party payment service providers such as PT Sinar Digital Terdepan which
					operates the payment gateway “Xendit”, and Rapyd Holdings Pte Ltd which operates the payment gateway
					“Rapyd” ("Third Party PSPs"), be advised that your access and use of such other services are
					governed solely by the terms and conditions of such other services, and you hereby acknowledge that
					you have read and understood and agree to be bound by the terms and conditions of such other
					services. We encourage you to review the terms and conditions and privacy policies of any third
					party service providers, including Third Party PSPs, before using their services and disclosing your
					personal data to them.
				</TabText>
				<TabText>
					The Transactions Platform and/or the Services provide a platform for the sale of goods between
					suppliers ("Suppliers") and buyers, whether as individuals or business merchants ("Buyers"), and
					enable you to either (i) list and sell your goods to Buyers and receive payments for the sale of
					goods as a Supplier; or (ii) manage and place orders for goods from Suppliers and make payments for
					the purchase of goods as a Buyer. You acknowledge and agree that (i) your payment to a Supplier (if
					you are a Buyer); or (ii) your receipt of payment from a Buyer (if you are a Supplier) arising from
					a transaction concluded on the Transactions Platform ("Concluded Transaction") is processed via an
					external payment gateway by Third Party PSPs. You further acknowledge that Digital Services SG Six
					Pte. Ltd. does not at any time accept, hold, retain or process any payment funds or cash balance
					pursuant to a Concluded Transaction, or otherwise provide any payment services to you. All payment
					funds or cash balance pursuant to a Concluded Transaction are held in regulated (custodian) accounts
					provided by Third Party PSPs (“PSP Accounts”). Digital Services SG Six Pte. Ltd. cannot guarantee
					the security of such third party payment system(s) or any payment data on the Transactions Platform.
				</TabText>
				<TabText>
					Further, upon creating an account with Tinvio, you will be offered a virtual wallet on the
					Transactions Platform ("Virtual Wallet") which will enable you as (i) a Buyer to (a) load and
					deposit funds from your bank account; and (b) transfer funds to Suppliers pursuant to a Concluded
					Transaction; or (ii) a Supplier to (a) receive funds from Buyers pursuant to a Concluded
					Transaction; and (b) withdraw any available balance of funds received in the Virtual Wallet to a
					bank account as designated by you. The funds deposited and received will be reflected in the Virtual
					Wallet as electronically stored currency. By creating a Virtual Wallet, you acknowledge and agree
					that the Virtual Wallet is offered and operated by a Third Party PSP, and the use of the Virtual
					Wallet and related services is subject to the terms and conditions of the relevant Third Party PSP
					to which you are bound by. Digital Services SG Six Pte. Ltd. does not provide or operate any virtual
					wallet or related services, or in any way facilitate the transfer of funds in and out of the Virtual
					Wallet.
				</TabText>
				<TabText>
					Digital Services SG Six Pte. Ltd. does not endorse, is not responsible or liable for any acts or
					omissions of any third parties, disclaims any and all liability in connection with the acts,
					omissions or defaults of such third parties, including Third Party PSPs, and make no representations
					or warranty of any kind, whether express or implied (including but not limited to, the implied
					warranties or conditions of merchantability and fitness for a particular purpose, non-infringement,
					security or accuracy), as to any aspect of such other services, including, without limitation, their
					content or the manner in which they handle data (including your data) or any interaction between you
					and the provider of such other services. By using the Transactions Platform and/or the Services, you
					irrevocably relieve Digital Services SG Six Pte. Ltd. from any and all liability in connection with
					the acts, omissions or defaults of such third parties, and waive any claim against Digital Services
					SG Six Pte. Ltd. with respect to such other services. Digital Services SG Six Pte. Ltd. is not
					liable for any damage or loss caused or alleged to be caused by or in connection with your
					enablement, access or use of any such other services, or your reliance on the privacy practices,
					data security processes or other policies of such other services. You may be required to register
					for such other services or log into their respective mobile or web applications, and you assume
					total risk and responsibility for your enablement, access or use of such other services. By enabling
					any other services, you are expressly permitting Digital Services SG Six Pte. Ltd. to disclose your
					data as necessary to facilitate the use or enablement of such other service.
				</TabText>
				<TabText>
					In particular, in the event of any discrepancy, irregularity, dispute, damage or loss whatsoever
					relating to a user's payment funds or cash balance which are held in PSP Accounts, Digital Services
					SG Six Pte. Ltd. expressly disclaims any and all liability in connection therewith. We will,
					however, exercise our contractual rights against the relevant Third Party PSP as required to protect
					our users under such circumstances, and use our best efforts to procure the relevant Third Party PSP
					to rectify, resolve and/or remedy the said discrepancy, irregularity, dispute, damage or loss as
					necessary. <br />
					Digital Services SG Six Pte. Ltd., the provider of Tinvio, does not require the approval of the
					Monetary Authority of Singapore for the Transactions Platform. While we will use due and reasonable
					efforts to check that all Third Party PSPs whom we work and contract with are regulated by the
					Monetary Authority of Singapore, please be advised that the Third Party PSPs themselves are
					responsible for maintaining their respective regulatory approvals on an ongoing basis. Users are
					advised to read the terms and conditions carefully.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Backups</TabSubTitle>
				<TabText>
					We perform regular backups of the Content, however, these backups are for our own administrative
					purposes only and are in no way guaranteed. You are responsible for maintaining your own backups of
					your data. We do not provide any sort of compensation for lost or incomplete data in the event that
					backups do not function properly. We will do our best to ensure complete and accurate backups, but
					assume no responsibility for this duty.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Advertisements</TabSubTitle>
				<TabText>
					During use of Tinvio, you may enter into correspondence with or participate in promotions of
					advertisers or sponsors showing their goods or services through Tinvio. Any such activity, and any
					terms, conditions, warranties or representations associated with such activity, is solely between
					you and the applicable third party. We shall have no liability, obligation or responsibility for any
					such correspondence, purchase or promotion between you and any such third party.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Links to other mobile or web applications</TabSubTitle>
				<TabText>
					Although the Transactions Platform may link to other third party mobile or web applications that are
					not affiliated with or owned, operated or controlled by Digital Services SG Six Pte. Ltd., we are
					not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or
					affiliation with any linked mobile or web application, unless specifically stated herein. Some of
					the links in Tinvio may be "affiliate links". This means if you click on the link and purchase an
					item, Digital Services SG Six Pte. Ltd. will receive an affiliate commission. We are not responsible
					for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals
					or the content of their mobile or web applications. We do not assume any responsibility or liability
					for the actions, products, services, and content of any other third parties. You should carefully
					review the legal statements, other conditions of use and privacy policies of any mobile or web
					application which you access through a link from the Transactions Platform. Your linking to any
					other off-site mobile or web applications is at your own risk.
				</TabText>
			</TabSection>
			<TabSection>
				<TabSubTitle>Prohibited uses</TabSubTitle>
				<TabText>
					In addition to other terms as set forth in the Agreement, you are prohibited from using Tinvio or
					its Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any
					unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules,
					laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the
					intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander,
					disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity,
					race, age, national origin, or disability; (f) to submit false or misleading information; (g) to
					upload or transmit viruses or any other type of malicious code that will or may be used in any way
					that will affect the functionality or operation of the Services or of any related mobile or web
					application, other mobile or web applications, or the Internet; (h) to collect or track the personal
					information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any
					obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the
					Services or any related mobile or web application, other mobile or web applications, or the
					Internet. We reserve the right to terminate your use of the Services or any related mobile or web
					application for violating any of the prohibited uses.
				</TabText>
			</TabSection>
		</TabWrapper>
	);
};

export default Terms;
