-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2025 at 09:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `guestbook`
--

CREATE TABLE `guestbook` (
  `GuestBookID` int(11) NOT NULL,
  `NamaTamu` varchar(100) DEFAULT NULL,
  `EmailTamu` varchar(100) DEFAULT NULL,
  `PhoneTamu` varchar(20) DEFAULT NULL,
  `RoomID` int(11) DEFAULT NULL,
  `CheckInTime` datetime DEFAULT NULL,
  `CheckOutTime` datetime DEFAULT NULL,
  `EntryDate` datetime DEFAULT current_timestamp(),
  `Notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guestbook`
--

INSERT INTO `guestbook` (`GuestBookID`, `NamaTamu`, `EmailTamu`, `PhoneTamu`, `RoomID`, `CheckInTime`, `CheckOutTime`, `EntryDate`, `Notes`) VALUES
(4, 'tes', 'tes@example.com', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2025-02-04 14:26:44', 'dasdsa'),
(5, 'Sir Zevander Timothee Zefanosia', 'zevander@example.com', '12345678', 3, '2020-12-11 11:11:00', '2020-12-12 11:11:00', '2025-02-04 14:27:15', 'mantap');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `RoomID` int(11) NOT NULL,
  `RoomNumber` varchar(50) NOT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`RoomID`, `RoomNumber`, `Type`, `Description`) VALUES
(1, '101', 'Single', 'Room with one bed'),
(2, '102', 'Double', 'Room with two beds'),
(3, '103', 'Suite', 'Luxury room with more space'),
(4, '104', 'Single', 'Room with one bed'),
(5, '105', 'Double', 'Room with two beds'),
(6, '106', 'Suite', 'Luxury room with more space'),
(7, '107', 'Single', 'Room with one bed'),
(8, '108', 'Double', 'Room with two beds'),
(9, '109', 'Suite', 'Luxury room with more space'),
(10, '110', 'Single', 'Room with one bed');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guestbook`
--
ALTER TABLE `guestbook`
  ADD PRIMARY KEY (`GuestBookID`),
  ADD KEY `RoomID` (`RoomID`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`RoomID`),
  ADD UNIQUE KEY `RoomNumber` (`RoomNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guestbook`
--
ALTER TABLE `guestbook`
  MODIFY `GuestBookID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `RoomID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `guestbook`
--
ALTER TABLE `guestbook`
  ADD CONSTRAINT `guestbook_ibfk_1` FOREIGN KEY (`RoomID`) REFERENCES `room` (`RoomID`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
