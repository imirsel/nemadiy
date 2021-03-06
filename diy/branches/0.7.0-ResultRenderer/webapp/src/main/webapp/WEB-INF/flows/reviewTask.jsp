<%@ include file="/common/taglibs.jsp"%>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta name="heading" content="Preview Job Settings"/>
</head>
<body>
	<form:form>
	    <fieldset>
	        <div style="margin-bottom:5px;"><label class="label">Job Name:</label> <label class="name">${jobForm.name}</label></div>
	    	<div style="margin-bottom:5px;"><label class="label">Job Description:</label> ${jobForm.description}</div>
	    </fieldset>
		<c:forEach var="component" items="${componentList}">
		 <c:if test="${(!component.hidden)&&(not empty componentMap[component])}">
			<fieldset>
				<table>
					<thead>
						<label class="name">${component.name}:</label>
					</thead>
					<c:forEach var="property" items="${componentMap[component]}">
					<c:if test="${not fn:startsWith(property.name,'_') }">
						<tr>
							<td>
								<label class="label"> ${render:displayName(property.name)}</label>
							</td>
							<td>:</td>
							<td>
								<c:out value="${property.value}" />
							</td>
						</tr>
						</c:if>
					</c:forEach>
				</table>
			</fieldset>
			</c:if>
		</c:forEach>
		<fieldset id="button">
            <input type="submit" name="_eventId_back" value="Back" />
			<input type="submit" name="_eventId_run" value="Run Job" />
		</fieldset>
	</form:form>
</body>