/**
 * 
 */
package org.imirsel.nema.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;
import org.imirsel.nema.util.StringUtil;

/**
 * @author gzhu1
 *
 */
@Entity
@Table(name="mirex_profile")
public class Contributor implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8964695332299396503L;
	
	private long id;
	private String firstname;
	private String lastname;
	private String organization;
	private String url;
	private String title;
	private String email;
	private Address address;
	private String department;
	private String unit;
	private String startYear;
	private String endYear;
	private String phone;
	private User creator;
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Column(name="firstname")
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	@Column(name="lastname")
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	@Column(name="orgnization")
	public String getOrganization() {
		return organization;
	}
	public void setOrganization(String organization) {
		this.organization = organization;
	}
	@Column(name="url")
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	@Column(name="title")
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Column(name="email")
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Embedded
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	@Column(name="department")
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	@Column(name="unit")
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	@Column(name="startYear")
	public String getStartYear() {
		return startYear;
	}
	public void setStartYear(String startYear) {
		this.startYear = startYear;
	}
	@Column(name="endYear")
	public String getEndYear() {
		return endYear;
	}
	public void setEndYear(String endYear) {
		this.endYear = endYear;
	}
	@Column(name="phone")
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPhone() {
		return phone;
	}
	@ManyToOne
	public User getCreator() {
		return creator;
	}
	public void setCreator(User creator) {
		this.creator = creator;
	}
	@Override
	public	boolean equals(Object o){
		if (this==o) {return true;}
		else if ((o==null) || (!(o instanceof Contributor))) {return false;}
		else {
			final Contributor that=(Contributor)o;
			return (
				StringUtil.same(lastname,that.getLastname())&&
				StringUtil.same(firstname,that.getFirstname())&&
				StringUtil.same(department,that.getDepartment())&&
				StringUtil.same(organization,that.getOrganization())&&
				StringUtil.same(unit,that.getUnit()));
			
					
		}
	}
	
	static int cachedHashCode=0;
	@Override 
	public int hashCode(){
		if (cachedHashCode==0) {
			String total=StringUtil.nonNull(lastname)+StringUtil.nonNull(firstname);
			cachedHashCode=total.hashCode();
		}
		return cachedHashCode;
	}
	
	@Override
	public String toString(){
		ToStringBuilder sb = new ToStringBuilder(this, ToStringStyle.DEFAULT_STYLE)
        	.append("Name:", lastname+", "+firstname)
        	.append("Orgnization:",organization);
		return sb.toString();
	}
	
}
