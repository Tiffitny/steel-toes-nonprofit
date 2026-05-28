CREATE TABLE `donations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`stripe_session_id` varchar(255) NOT NULL,
	`stripe_payment_intent_id` varchar(255),
	`amount` int NOT NULL,
	`currency` varchar(10) NOT NULL DEFAULT 'usd',
	`donor_email` varchar(320),
	`donor_name` varchar(255),
	`giving_level` varchar(100),
	`status` enum('completed','pending','failed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `donations_id` PRIMARY KEY(`id`),
	CONSTRAINT `donations_stripe_session_id_unique` UNIQUE(`stripe_session_id`)
);
