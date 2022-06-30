-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2022 at 10:12 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `torob`
--

-- --------------------------------------------------------

--
-- Table structure for table `commodity`
--

CREATE TABLE `commodity` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `low_price` int(11) NOT NULL,
  `high_price` int(11) NOT NULL,
  `time` time NOT NULL,
  `model` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `img_link` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `commodity`
--

INSERT INTO `commodity` (`id`, `name`, `low_price`, `high_price`, `time`, `model`, `type`, `img_link`) VALUES
(1, 'گوشی سامسونگ A32', 5650000, 7350000, '33:22:20', 'samsung', 'mobile', 'https://yazdghesti.ir/wp-content/uploads/2021/12/Samsung-Galaxy-A32-5G-64GB-Awesome-Black-8806090963049-26032020-01-p.jpg'),
(2, 'گوشی اپل iPhone 13 Pro max (Not Active)', 5017000, 5900000, '33:22:20', 'apple', 'mobile', 'https://storage.torob.com/backend-api/base/images/Np/T-/NpT-mU7_pyaDS9BX.jpg'),
(3, 'گوشی شیائومی Redmi Note 11', 5017000, 5900000, '33:22:20', 'xiaomi', 'mobile', 'https://storage.torob.com/backend-api/base/images/GU/ub/GUubkYLYB5rgHX6E.png'),
(4, 'تبلت سامسونگ A7 Lite T225', 3777000, 5750000, '33:22:20', 'samsung', 'tablet', 'https://storage.torob.com/backend-api/base/images/75/b_/75b_h9wSH9-8H-Ku.jpg'),
(5, 'تبلت اپل iPad pro 3rd 2021 Wifi', 23650000, 45500000, '33:22:20', 'apple', 'tablet', 'https://storage.torob.com/backend-api/base/images/Ki/KU/KiKUUjJMeZIIInSn.jpg'),
(6, 'تبلت شیائومی 5 iPad', 10599000, 14890000, '33:22:20', 'xiaomi', 'tablet', 'https://storage.torob.com/backend-api/base/images/AS/ap/ASapQJWyfKTOm_m2.jpg'),
(7, 'مک بوک ایر 8GB RAM | 256GB SSD | M1 | MGN63 ا Macbook Air MGN63', 29549000, 34250000, '33:22:20', 'apple', 'laptop', 'https://storage.torob.com/backend-api/base/images/p6/y9/p6y9nH_xf1qYVoID.png'),
(8, 'لپ تاپ لنوو Ideapad Gaming 3 | 4GB RAM | 1TB HDD | N4020 ا LENOVO IDEAPAD 3 15IGL05', 6000000, 9000000, '33:22:20', 'lenovo', 'laptop', 'https://storage.torob.com/backend-api/base/images/YJ/ak/YJaktypPem--_GQW.jpg'),
(9, 'لپ تاپ 15 اینچ ایسوس X543MA ا Asus X543MA | 15 inch | Celeron | 4GB | 1TB', 6400000, 10500000, '00:00:00', 'asus', 'laptop', 'https://storage.torob.com/backend-api/base/images/po/wH/powHvqz-SGHZcrDe.jpg'),
(16, 'test', 2000000, 2040000, '00:00:00', 'apple', 'laptop', 'https://storage.torob.com/backend-api/base/images/Rp/wq/RpwqzlpVUJPtwL-v.png');

-- --------------------------------------------------------

--
-- Table structure for table `commodity_report`
--

CREATE TABLE `commodity_report` (
  `id` int(11) NOT NULL,
  `report1` varchar(255) NOT NULL,
  `report2` varchar(255) NOT NULL,
  `commodityid` int(11) NOT NULL,
  `shopid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `commodity_report`
--

INSERT INTO `commodity_report` (`id`, `report1`, `report2`, `commodityid`, `shopid`) VALUES
(5, 'test1', 'test2', 3, 2),
(6, 'test1', 'test2', 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `fav_commodity_list`
--

CREATE TABLE `fav_commodity_list` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `commodityid` int(11) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `laptop`
--

CREATE TABLE `laptop` (
  `id` int(11) NOT NULL,
  `commodityid` int(11) NOT NULL,
  `ram` varchar(255) NOT NULL,
  `gpu` varchar(255) NOT NULL,
  `cpu` varchar(255) NOT NULL,
  `Page_dimensions` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `laptop`
--

INSERT INTO `laptop` (`id`, `commodityid`, `ram`, `gpu`, `cpu`, `Page_dimensions`) VALUES
(7, 16, '8', 'test', 'cori5', 'test inch');

-- --------------------------------------------------------

--
-- Table structure for table `mobile`
--

CREATE TABLE `mobile` (
  `id` int(11) NOT NULL,
  `commodityid` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `warranty` varchar(255) NOT NULL,
  `ram` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE `shop` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shop_commodity`
--

CREATE TABLE `shop_commodity` (
  `id` int(11) NOT NULL,
  `commodityid` int(11) NOT NULL,
  `shopid` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `link` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_commodity`
--

INSERT INTO `shop_commodity` (`id`, `commodityid`, `shopid`, `price`, `link`) VALUES
(1, 1, 1, 5650000, 'https://www.technolife.ir/product-2545/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF-%D9%85%D8%AF%D9%84-%DA%AF%D9%84%DA%A9%D8%B3%DB%8C-a32-4g-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA---%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-128-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA---%D8%B1%D9%85-6-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA?utm_medium=PPC_adv_click&utm_source=Torob'),
(2, 1, 2, 5850000, 'https://api.torob.com/v4/product-page/redirect/?source=next&uid=&discover_method=browse&_bt__experiment=&search_id=62b98ca6389ca34ca4c4d461&suid=62b98ca6389ca34ca4c4d461&bvid=62b98cad7d196721d4dc4ea8&session_id=hjsipuwogkqicmqcprrwazyshhousajs&prk=688e0f8d-154d-4555-9f71-c6744fd0305b&is_adv=False&btn=buy&shop_rank=1&device=desktop&_url_referrer=&_http_referrer=&_ft__shop_score=not_true_not_false'),
(3, 2, 1, 50017000, 'https://www.technolife.ir/product-2840/-%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%A7%D9%BE%D9%84-%D9%85%D8%AF%D9%84-iphone-13-pro-max-za/a-not-active-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-256-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA---%D8%B1%D9%85-6-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA?utm_medium=PPC_adv_click&utm_source=Torob'),
(4, 3, 1, 5850000, 'https://www.technolife.ir/product-3554/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-redmi-note-11-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-128-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA---%D8%B1%D9%85-6-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA?utm_medium=PPC_adv_click&utm_source=Torob'),
(5, 4, 1, 3777000, 'https://berozkala.com/fa/product/10017/%D8%AA%D8%A8%D9%84%D8%AA-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF-%D9%85%D8%AF%D9%84-tab-a7-lite-smt225-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-32-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA?utm_medium=PPC_adv_click&utm_source=Torob'),
(6, 5, 2, 23650000, 'https://api.torob.com/v4/product-page/redirect/?source=next&uid=&discover_method=browse&_bt__experiment=&search_id=62b98db138899f5ecfca0633&suid=62b98db138899f5ecfca0633&bvid=62b98db92ecfd01e780c7d54&session_id=hjsipuwogkqicmqcprrwazyshhousajs&prk=4f9c98eb-9b7f-423a-a4d3-52278b26842e&is_adv=True&btn=buy&shop_rank=0&device=desktop&_url_referrer=&_http_referrer=&_ft__shop_score=not_true_not_false'),
(7, 6, 2, 105990000, 'https://bestchina.ir/product/xiaomi-mi-pad-5/?utm_medium=PPC&utm_source=Torob'),
(8, 7, 1, 2954900, 'https://www.mobile140.com/fa/product/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE/5184-%D9%84%D9%BE%E2%80%8C%D8%AA%D8%A7%D9%BE-%D8%A7%D9%BE%D9%84-%D9%85%D8%AF%D9%84-MacBook-Air-MGN63-%7C-M1-%7C-256GB-SSD-%7C-8GB-RAM-%7C-7-Core-Apple-Designed.html'),
(9, 8, 2, 6000000, 'https://www.mobile140.com/fa/product/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE/5179-%D9%84%D9%BE%E2%80%8C%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-15.6-%D8%A7%DB%8C%D9%86%DA%86-IdeaPad-3-%7C--Celeron-1.1-(N4020)-%7C1TB-HDD-%7C-4GB-RAM-%7C-Intel-HD-620.html'),
(10, 9, 1, 6400000, 'https://asusiran.com/product/vivobook-x543ma-gq1012/?utm_medium=PPC_adv_click&utm_source=Torob'),
(22, 16, 1, 2000000, 'https://pawilo.com/Product/PWP-264035/%da%af%d9%88%d8%b4%db%8c-%d9%85%d9%88%d8%a8%d8%a7%db%8c%d9%84-%d8%b4%db%8c%d8%a7%d8%a6%d9%88%d9%85%db%8c-%d9%85%d8%af%d9%84-11t-21081111rg-5g-%d8%af%d9%88-%d8%b3%db%8c%d9%85-%da%a9%d8%a7-2/?utm_medium=PPC&utm_source=Torob'),
(23, 16, 2, 2000000, 'https://pawilo.com/Product/PWP-264035/%da%af%d9%88%d8%b4%db%8c-%d9%85%d9%88%d8%a8%d8%a7%db%8c%d9%84-%d8%b4%db%8c%d8%a7%d8%a6%d9%88%d9%85%db%8c-%d9%85%d8%af%d9%84-11t-21081111rg-5g-%d8%af%d9%88-%d8%b3%db%8c%d9%85-%da%a9%d8%a7-2/?utm_medium=PPC&utm_source=Torob'),
(24, 16, 3, 2040000, 'https://pawilo.com/Product/PWP-264035/%da%af%d9%88%d8%b4%db%8c-%d9%85%d9%88%d8%a8%d8%a7%db%8c%d9%84-%d8%b4%db%8c%d8%a7%d8%a6%d9%88%d9%85%db%8c-%d9%85%d8%af%d9%84-11t-21081111rg-5g-%d8%af%d9%88-%d8%b3%db%8c%d9%85-%da%a9%d8%a7-2/?utm_medium=PPC&utm_source=Torob');

-- --------------------------------------------------------

--
-- Table structure for table `tablet`
--

CREATE TABLE `tablet` (
  `id` int(11) NOT NULL,
  `commodityid` int(11) NOT NULL,
  `ram` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `warranty` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `type`, `phone_number`) VALUES
(5, 'mht', '12345678Ba', 'tahani.m.h11@gmail', 'normal', '09130182834'),
(7, 'alizoli', '12345678Ba1', 'alizoli@gmail.com', 'shop', '09103200988');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commodity`
--
ALTER TABLE `commodity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commodity_report`
--
ALTER TABLE `commodity_report`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fav_commodity_list`
--
ALTER TABLE `fav_commodity_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laptop`
--
ALTER TABLE `laptop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mobile`
--
ALTER TABLE `mobile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shop_commodity`
--
ALTER TABLE `shop_commodity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tablet`
--
ALTER TABLE `tablet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commodity`
--
ALTER TABLE `commodity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `commodity_report`
--
ALTER TABLE `commodity_report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fav_commodity_list`
--
ALTER TABLE `fav_commodity_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `laptop`
--
ALTER TABLE `laptop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `mobile`
--
ALTER TABLE `mobile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shop_commodity`
--
ALTER TABLE `shop_commodity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tablet`
--
ALTER TABLE `tablet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
