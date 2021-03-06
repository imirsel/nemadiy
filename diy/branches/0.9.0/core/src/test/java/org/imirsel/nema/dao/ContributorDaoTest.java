package org.imirsel.nema.dao;

import java.util.List;

import org.imirsel.nema.model.Contributor;
import org.springframework.beans.factory.annotation.Autowired;

public class ContributorDaoTest extends BaseDaoTestCase {
	ContributorDao contributorDao;

	@Autowired
	public void setContributorDao(ContributorDao contributorDao) {
		this.contributorDao = contributorDao;
	}
	
	public void testSimilarSearch(){
		List<Contributor> list=contributorDao.findSimilar("imirsel");
		assertEquals(3, list.size());
		list=contributorDao.findSimilar("Nema");
		assertEquals(2, list.size());
		list=contributorDao.findSimilar("UI");
		assertEquals(2, list.size());
		list=contributorDao.findSimilar("UIUC");
		assertEquals(1, list.size());
		list=contributorDao.findSimilar("Purdue");
		assertEquals(0,list.size());
	}
}
